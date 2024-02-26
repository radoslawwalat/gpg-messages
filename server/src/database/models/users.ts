import { Model } from "objection";
import knex from "../config";
import Messages from "./messages";

Model.knex(knex);

class Users extends Model {
    id?: number;
    username?: string;
    public_key?: string;
    create_date?: string;

    static get Users() {
        return {
            required: [
                "id",
                "username",
                "public_key",
                "create_date",
            ],
            properties: {
                id: { type: "integer" },
                username: { type: "string", length: 50 },
                public_key: { type: "string", length: 20 },
                create_date: { type: "string", length: 255 },
            },
        };
    }

    static get relationMappings() {
        return {
            tasks: {
                relation: Model.HasManyRelation,
                modelClass: Messages,
                join: {
                    from: "users.id",
                    to: "messages.user_id",
                },
            },
        };
    }

    static get tableName(): string {
        return "users";
    }

    static async getUserById(id: number): Promise<Users | null> {
        try {
            const user = await Users.query().findById(id);
            return user || null;
        } catch (error) {
            console.error("Error getting user by ID:", error);
            return null;
        }
    }

    static async getUserByUsername(username: string): Promise<Users | null> {
        try {
            const user = await Users.query().where("username", username).first();
            return user || null;
        } catch (error) {
            console.error("Error getting user by username:", error);
            return null;
        }
    }

    static async getAllUsers() {
        try {
            return await Users.query();
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    }
}

export default Users;
