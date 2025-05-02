import React from 'react'

const Card = ({amount,img,handleclick}) => {
  return (
    <>

    <div className='h-84 w-68 bg-red-200 rounded overflow-hidden'>
        <img className='h-60 w-full object-cover' src={img} alt="" />
        <div className='flex justify-between items-center mt-2 px-2'>
        <h1 className='text-green-400'>{amount}</h1>
        <button className='bg-red-500 rounded py-2 px-6 ' onClick={()=>handleclick(amount)}>pay</button>
        </div>
       
       


    </div>
      
    </>
  )
}

export default Card
