
import express from 'express';
import {getAllUsers, getUserById, getUserByUsername} from "../controller/users";

export default (router: express.Router) => {
    router.get('/users', getAllUsers);
    router.get('/users/:username', getUserByUsername);
};
