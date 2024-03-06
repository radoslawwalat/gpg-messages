import express, {Express} from "express";
import cors from "cors";
import mysql from "mysql2";
import router from "./router";

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'JsonWebToken'],
};

export const dbConfig = {
    host: process.env.DB_HOST || 'database',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'database',
};

export const app: Express = express();

app.use(express.json());
app.use(cors(corsOptions));

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

app.use('/api/', router())