import express from "express";

const router =  express.Router();

router.get('/test', (req, res)=>{
    console.log('router test');
    res.send("test workd")
})

export default router;