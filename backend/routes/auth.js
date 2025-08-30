import express from 'express';
import { User } from '../models/user';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }
    catch(error){
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "Invalid email id!" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(400).json({ message: "Invalid Password!" });
        }
        res.status(200).json({ message: "Login successful" });
    }
    catch(error){
        res.status(500).json({ message: "Server error" });
    }
});

export default router;