const express = require('express')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const  paymentroute  = require('./routes/paymentroute');
const cors= require('cors');
const connect=require('./databaseconnection/dbconnection')




app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

connect();

app.use("/api",paymentroute)
app.get("/api/getkey",(req,res)=>{
    res.status(201).json({key:process.env.RAZORPAY_API_KEY})
})


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
})

