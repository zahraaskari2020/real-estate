import bcrypt from"bcrypt";
import JWT from "jsonwebtoken"
import prisma from "../lib/prisma.js";

export const register = async (req,res) =>{
    const {username, email, password} = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await prisma.user.create({
            data : {
                username,
                email,
                password:hashedPassword
            }
        })

        res.status(201).json({message:"user created successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to creat user"})
    }
}

export const login = async (req,res) =>{

    const {username, password} = req.body;

    try {

        const user = await prisma.user.findUnique({
            where :{username}
        })

        if(!user) return res.status(401).json({message: "Invalid credintial!"})

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if(!isPasswordValid) return res.status(401).json({message: "Invalid credintial!"})

        const age = 1000 * 60 * 60 * 24 * 7 ;
        const token = JWT.sign({
            id:user.id
        }, process.env.JWT_SECRET_KEY, {expiresIn:age})

        
        res.cookie("toekn", token, {
            httpOnly:true,
            secure:true,
            maxAge: age
        }).status(200).json({message:"login successfuly"})

    } catch(err){
        console.log(err);
        res.status(500).json({message:"Failed to login"})
    }
    
}

export const logout = (req,res) =>{

    res.clearCookie("token").status(200).json({message:"logout successful"})
    
}