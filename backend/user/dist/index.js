import dotenv from "dotenv";
import express from "express";
import connectDb from "./config/db.js";
import { createClient } from "redis";
dotenv.config();
connectDb();
export const redisClient = createClient({
    url: process.env.REDIS_URL || "",
});
redisClient
    .connect()
    .then(() => console.log("Connected to redis"))
    .catch(console.error);
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
//# sourceMappingURL=index.js.map