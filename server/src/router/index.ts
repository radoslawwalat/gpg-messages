import express from 'express';
import messages from "./messages";
import users from "./users";
import encryption from "./encryption";
import authentication from "./authentication";

const router = express.Router();

export default (): express.Router => {
    authentication(router)
    messages(router)
    encryption(router)
    users(router)
    return router;
};
