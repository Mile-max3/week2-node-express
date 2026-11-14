
import express from "express";

const userRouter = express.Router();

import middleware from "./middleware.js";


userRouter.get("/",(req,res,next)=>{
    res.status(200).json({message: "My Week Two API!!"});
});

userRouter.post("/user",middleware,(req,res)=>{
    const {name,email} = req.body;
    res.status(200).json({message: `Hello ${name}`});
});

userRouter.get("/user/:id/",(req,res)=>{
    const id = req.params.id

    if(!id)
        res.status(400).json({message: 'enter required field'});

    res.status(200).json({message: `User ${id} Profile`});
});

export default userRouter;

