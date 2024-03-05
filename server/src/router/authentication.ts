
import express from 'express';
import {login, logout, register, validateJWT} from "../controller/authentication";

export default (router: express.Router) => {
    router.post('/auth/register', register);
    router.post('/auth/login', login);
    router.get('/auth/logout', logout);
    router.get('/auth/validate-jwt', validateJWT);
};