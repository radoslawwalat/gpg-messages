import { Model } from "objection";
import knex from "../config";

Model.knex(knex);

class Messages extends Model {
    id?: number;
    user_id?: number;
    encrypted_output?: string;

    static get Users() {
        return {
            required: [
                "id",
                "user_id",
                "encrypted_output",
            ],
            properties: {
                id: { type: "integer" },
                user_id: { type: "string", length: 50 },
                encrypted_output: { type: "string", length: 50 },
            },
        };
    }

    // static get relationMappings() {
    //     return {
    //         tasks: {
    //             relation: Model.HasManyRelation,
    //             modelClass: Messages,
    //             join: {
    //                 from: "users.id",
    //                 to: "messages.user_id",
    //             },
    //         },
    //     };
    // }

    static get tableName(): string {
        return "users";
    }

}

export default Messages;
