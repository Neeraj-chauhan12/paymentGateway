const express = require('express');
const { checkout, verification } = require('../controllers/paymentcontrollers');

const route=express.Router();

route.post("/payment",checkout)
route.post("/verification",verification)


module.exports=route;