import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";


const app =  express();
app.use(express.json())

app.use('/api/posts', postRouter);
app.use('/api/auth', authRouter);


app.listen(8800, ()=>{
    console.log("server is running");
})