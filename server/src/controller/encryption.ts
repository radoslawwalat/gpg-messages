import {Request, Response} from "express";
import * as openpgp from 'openpgp';
import Users from "../database/models/users";

export const encrypt = async(req: Request, res: Response) => {
    try {
        const { message, user_ids } = req.body;
        const publicKeysArmored = await Users.getPublicKeysByIds(user_ids);
        const encryptionKeys = await Promise.all(publicKeysArmored.map(async (armoredKey: string) => openpgp.readKey({ armoredKey })));
        const encryptedMessage = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: message }),
            encryptionKeys: encryptionKeys,
        });

        return res.status(200).json({ encryptedMessage: encryptedMessage });
    }
    catch(error) {
        console.error("Encryption error:", error);
        return res.status(500).send({message: "Internal server error"});
    }
};
