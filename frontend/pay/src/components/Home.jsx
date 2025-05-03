import React from 'react'
import Card from './Card'
import pic4 from '../../public/s1.jpg'
import pic1 from '../../public/s2.avif'
import pic2 from '../../public/s3.jpg'
import pic3 from '../../public/s4.jpg'
import axios from 'axios'



const Home = () => {

    const handlep =async (amount)=>{

        const {data:{key}}= await axios.get('http://localhost:3000/api/getkey')
       
        const {data:{order}}=await axios.post('http://localhost:3000/api/payment',{amount}) 

        var options = {
            key, // Enter the Key ID generated from the Dashboard
            amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "first Transaction",
            image: pic1,
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "http://localhost:3000/api/verification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);
        
            razor.open();
        
        }

        //console.log(data)
        
    
    

  return (
    <div className='flex gap-8 bg-black flex-wrap justify-center items-center h-screen w-screen py-5 px-10'>
      <Card amount={5000} img={pic1} handleclick={handlep} />
      <Card amount={6000} img={pic2} handleclick={handlep}/>
      <Card amount={9000} img={pic3} handleclick={handlep}/>
      <Card amount={1000} img={pic4} handleclick={handlep}/>
    
    </div>
  )
}

export default Home
