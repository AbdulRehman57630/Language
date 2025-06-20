import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import db from './config/db.js';
import studentRouter from './route/studentRouter.js';
import contactRouter from './route/contactRouter.js'

dotenv.config();
const app = express();

// DB connect
db;

// Middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/students', studentRouter);
app.use('/api/contactus', contactRouter);



// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
