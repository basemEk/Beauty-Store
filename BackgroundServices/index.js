import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";
import sendWelcomeEmail from "./EmailServices/sendWelcomeEmail.js";
import sendPendingOrderEmail from "./EmailServices/sendPendingOrderEmail.js";
import sendPromotionEmail from "./EmailServices/sendPromotionEmail.js";

dotenv.config();

const app = express();

//SCHEDULE SERVICES
const services = () => {
    cron.schedule('* * * * * *', () => {
        sendWelcomeEmail();
        sendPendingOrderEmail();
    });
}

//SCHEDULE PROMOTION EMAIL
const promotion = () => {
    cron.schedule('30 5 * * 5', () => {
        sendPromotionEmail();
    });
}

services();
promotion();


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`BackgroundServices is running on port ${PORT}`);
    dbConnection();
});

