const express = require ('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoute');
const cors = require('cors');


const app = express();


// 1 middlewares
app.use(express.json());

app.use(cors({ origin: 'http://localhost:5173' }));

// 2 Route
app.use('/api/auth', authRouter)

// 3 mongodb

mongoose.connect('mongodb://127.0.0.1:27017/app')
.then(() =>
    console.log('connected db')
).catch((error)=>
console.error('failed')

)

// 4 global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});


// 5 server

const PORT = 3000;
app.listen(PORT , ()=>{
    console.log(`server is running ${PORT}`);
    
})