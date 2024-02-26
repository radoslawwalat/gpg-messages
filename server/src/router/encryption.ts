import express from 'express';
import {encrypt} from "../controller/encryption";

export default (router: express.Router) => {
     router.post('/encryption', encrypt);
};
