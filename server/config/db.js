import { log } from "console";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectdb = mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('db connected');
    
}).catch((err) =>{
    console.log('db connection failed', err);
    
});

export default connectdb;