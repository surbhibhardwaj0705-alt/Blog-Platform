import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';


const router = express.Router();

// Register route
router.post('/register', (req, res) => {
    try {

        console.log(req.body);

        const user = new User(req.body);

        user.save();

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
       // console.log(req.body);
        const user = await User.findOne({
            email: req.body.email           
        });    
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log(user.email);
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );
        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});


export default router;
