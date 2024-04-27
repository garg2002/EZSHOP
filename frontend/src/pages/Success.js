import React from 'react'
import { Link } from 'react-router-dom'

import SuccessImage from '../assest/payment_success.webp'
const Success = () => {

  // const [cartLength, setCartLength] = useState(null);
  // const CartEmpty = ()=>{
  //   setCartLength(0);
  // }; 
  // <Cart cartLength = {cartLength} />
  return (
    <div className='flex flex-col mx-auto rounded-md border-2 p-4 shadow-lg mt-8 items-center justify-center h-full w-1/3'>
      <div className=' mt-5'>
      <img src={SuccessImage} alt="" width={150} height={100} />
      </div>
      <div>
        <h1 className='text-emerald-700 text-center font-bold text-2xl'>Payment Done ...</h1>
      <p className='text-xl mb-4'>Your payment has been processed successfully.</p>
      <div className='text-center'>
      <Link
                to={"/"}
                className="bg-emerald-500 text-center mx-auto hover:bg-emerald-700  text-white text-lg font-semibold rounded-lg p-2"
              >
              <button > Back To Home  Page &rarr;</button>
        </Link>
      </div>
      </div>
      
    
    </div>
  )
}

export default Success
