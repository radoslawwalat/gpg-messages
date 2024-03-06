import dotenv from "dotenv";
import mysql from "mysql2";
import router from "./router";
import {app} from "./app";
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});