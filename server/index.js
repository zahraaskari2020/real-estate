import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app =  express();
app.use(express.json());
app.use(cookieParser())

app.use('/api/posts', postRouter);
app.use('/api/auth', authRouter);


app.listen(8800, ()=>{
    console.log("server is running");
})