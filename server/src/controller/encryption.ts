import {Request, Response} from "express";
import * as openpgp from 'openpgp';

export const encrypt = async(req: Request, res: Response) => {
    try {
        const {content, publicKey} = req.body;
        const publicKeyObj = await openpgp.readKey({ armoredKey: publicKey });

        const encrypted = await openpgp.encrypt({
            message: await openpgp.createMessage({ text: content }),
            encryptionKeys: publicKeyObj,
        });

        return res.status(200).send({encryptedContent: encrypted});
    }
    catch(error) {
        console.error("Encryption error:", error);
        return res.status(500).send({message: "Internal server error"});
    }
};
