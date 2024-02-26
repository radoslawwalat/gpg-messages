import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import router from "./router";

dotenv.config();

export const dbConfig = {
    host: process.env.DB_HOST || 'database',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'database',
};

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

app.use('/api/', router())
