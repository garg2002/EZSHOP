import React from 'react'
import FailedImage from '../assest/payment_failed.png'
import {Link} from 'react-router-dom'

const Cancel = () => {
  return (
    <div className='flex flex-col mx-auto rounded-md border-2 p-4 shadow-lg mt-8 items-center justify-center h-full w-1/3'>
      <div className=' mt-5'>
      <img src={FailedImage} alt="" width={150} height={100} />
      </div>
      <div>
        <h1 className='text-rose-700 text-center font-bold text-2xl'>Payment Failed ! ...</h1>
      <p className='text-xl mb-4'>Your payment has been failed please try again.</p>
      <div className='text-center'>
      <Link
                to={"/cart"}
                className="bg-rose-500 text-center mx-auto hover:bg-rose-700  text-white text-lg font-semibold rounded-lg p-2"
              >
              <button> Back To Checkout &rarr;</button>
        </Link>
      </div>
      </div>
      
    
    </div>
  )
}

export default Cancel
