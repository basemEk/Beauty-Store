import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
dotenv.config();

const app = express();

//SCHEDULE SERVICES
const services = () => {
    cron.schedule('* * * * * *', () => {
        console.log('running a task every second');
    });
}

services();


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    dbConnection();
});

