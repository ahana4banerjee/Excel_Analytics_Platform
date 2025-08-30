import express from 'express';
import { User } from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const { name, email, password, role } = req.body;
         
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({
                message: "User already exists",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword, role});
        await newUser.save();

        return res.status(201).json({ 
            message: "User registered successfully",
            success: true 
        });
    }
    catch(error){
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/login', async (req, res) => {
    
    try{
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };

        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ 
                message: "Invalid email id!",
                success: false
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).json({ 
                message: "Invalid Password!",
                success: false 
            });
        }

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Login Successfull. Welcome back ${user.name}`,
            user,
            success: true
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({ message: "Server error" });
    }
});

export default router;