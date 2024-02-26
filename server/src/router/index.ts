import express from 'express';
import messages from "./messages";
import users from "./users";
import encryption from "./encryption";

const router = express.Router();

export default (): express.Router => {
    messages(router)
    encryption(router)
    users(router)
    return router;
};
