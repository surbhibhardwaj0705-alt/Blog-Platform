import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import blogRoute from './routes/blogRoute.js';
import authRoute from './routes/authRoute.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', blogRoute);
app.use('/api', authRoute);



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
