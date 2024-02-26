import {Request, Response} from "express";
import Users from "../database/models/users";

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users = await Users.getAllUsers();

        if (!users) {
            return res.status(404).json({message: "No users found."});
        }

        return res.status(200).json(users);
    }
    catch(error) {
        return res.status(500).send({message: "Internal server error"});
    }
}

export const getUserById = async(req: Request, res: Response) => {
    const {user_id} = req.params;

    try{

        const user = await Users.getUserById(parseInt(user_id));
        if (!user) {
            return res.status(404).json({message: "No users found."});
        }

        return res.status(200).json(user);
    }
    catch(error) {
        return res.status(500).send({message: "Internal server error"});
    }
}

export const getUserByUsername = async(req: Request, res: Response) => {
    const {username} = req.params;

    try{

        const user = await Users.getUserByUsername(username);
        if (!user) {
            return res.status(404).json({message: "No users found."});
        }

        return res.status(200).json(user);
    }
    catch(error) {
        return res.status(500).send({message: "Internal server error"});
    }
}