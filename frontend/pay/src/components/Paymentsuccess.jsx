import React from 'react'
import {useSearchParams} from 'react-router-dom'

const Paymentsuccess = () => {
    const searchquery= useSearchParams()[0]
    const referenceNum=searchquery.get("reference")
  return (
    <>
    <div  className='h-screen w-screen flex justify-center flex-col gap-3 items-center'>
        <h1 className='text-green-600 text-7xl'>Order Successfull</h1>
        <h2>Reference No. {referenceNum}</h2>

    </div>
      
    </>
  )
}

export default Paymentsuccess
