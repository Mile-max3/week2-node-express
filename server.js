import express from "express";

import dotenv from "dotenv";

import userRouter from "./controller.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/",userRouter);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});