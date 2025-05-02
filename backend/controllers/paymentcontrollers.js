const instance = require('../utils.js')
 
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

    res.status(201).json({success:true})

}