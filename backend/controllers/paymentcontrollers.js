const instance = require('../utils.js')
const crypto= require('crypto')
const orderpayment = require('../models/order.js')
 
exports.checkout =async (req,res)=>{

    const options = {
        
        amount: Number(req.body.amount*100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',

    };
    const order= await instance.orders.create(options);
    // console.log(order)
    res.status(201).json({success:true,order})

}


 
exports.verification =async(req,res)=>{
    console.log(req.body)

    const { razorpay_order_id, razorpay_payment_id,razorpay_signature}=req.body;

    const body= razorpay_order_id +"|"+ razorpay_payment_id;

    const exceptedSignature= crypto
        .createHmac("Sha256",process.env.RAZORPAY_ACCESS_SECRET)
        .update(body.toString())
        .digest('hex')

        // console.log("sign received ",razorpay_signature)
        // console.log("sign generatted ",exceptedSignature)

        const isauthentic=razorpay_signature===exceptedSignature

        if(isauthentic){

        await orderpayment.create({
            razorpay_order_id, 
            razorpay_payment_id,
            razorpay_signature

        })

            res.redirect(`http://localhost:5173/payment?reference=${razorpay_payment_id}`)

        }
        else{
            res.status(201).json({success:true})
        }


   // res.status(201).json({success:true})

}