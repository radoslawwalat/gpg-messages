import {Request, Response} from "express";
import {authentication, generateSessionToken, random} from "../helpers";
import jwt from "jsonwebtoken";
import {User} from "../types/models";
import Users from "../database/models/users";
import {HttpStatusCode} from "axios";

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user: User | null = await Users.getUserByUsername(username);

        if (!user) {
            return res.status(HttpStatusCode.NotFound).json({ message: "Invalid credentials" });
        }

        const expectedHash = authentication(user.salt, password);

        if ((await Users.getHashedPassword(user.username)) !== expectedHash) {
            return res.status(HttpStatusCode.Unauthorized).send({ message: "Invalid credentials" });
        }

        // @ts-ignore
        const sessionToken = generateSessionToken(user.id.toString());
        try {
            await Users.updateSessionToken(user, sessionToken);
        } catch (error) {
            return res.status(HttpStatusCode.InternalServerError).send({ message: "Internal server error" });
        }

        res.cookie("JsonWebToken", sessionToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            domain: "localhost",
            path: "/",
        });

        return res.status(HttpStatusCode.Ok).json({ message: "login success" }).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(HttpStatusCode.InternalServerError);
    }
};

export const register = async (req: Request, res: Response) => {
    try {
        const { username, password} = req.body;

        const user = await Users.getUserByUsername(username);

        if (user) {
            return res
                .status(404)
                .json({ message: "User with provided email already exists" });
        }

        const salt = random();

        const newUser: User = {
            username,
            password,
            salt,
            public_key: "empty",
            sessionToken: undefined,
        };

        try {
            await Users.createUser(newUser);

            return res.status(HttpStatusCode.Ok).json({ message: "Register success" });
        } catch (error) {
            console.error("Error creating user:", error);
            return res.status(HttpStatusCode.InternalServerError).send({ message: "Internal server error" });
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const validateJWT = (req: Request, res: Response): Response | void => {
    const { JsonWebToken } = req.cookies;

    if (!JsonWebToken) {
        return res
            .status(401)
            .json({ message: "Unauthorized: Missing token", isValid: false });
    }

    const token: string = Array.isArray(JsonWebToken)
        ? JsonWebToken[0]
        : JsonWebToken;
    try {
        jwt.verify(token, process.env.SECRET_KEY as string);
        return res.status(HttpStatusCode.Ok).json({ message: "Token is valid", isValid: true });
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(HttpStatusCode.Unauthorized).json({
                message: "Unauthorized: Token has expired",
                isValid: false,
            });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res
                .status(HttpStatusCode.Unauthorized)
                .json({ message: "Unauthorized: Invalid token", isValid: false });
        }
        return res
            .status(HttpStatusCode.InternalServerError)
            .json({ message: "Internal Server Error", isValid: false });
    }
};

export const logout = async (
    req: Request,
    res: Response
): Promise<Response> => {
    res.cookie("JsonWebToken", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: true,
    });
    return res.status(HttpStatusCode.Ok).json({ message: "Logged out successfully" });
};