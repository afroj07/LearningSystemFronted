import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import { RxCrossCircled } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const CheckoutFailure = () => {



  return (
    <HomeLayout>
        <div className='min-w-[90vh] flex items-center justify-center text-white'>
            <div className='w-80 h-26[26rem] flex felx-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative'>
           <h1 className='bg-red-500 absolute top-0 w-full py-4 text-2xl font-2xl font-bold rounded-tl-lg rounded-tr-lg text-center' >
             Payment Failed
           </h1>
            <div className='px-4 flex flex-col items-center justify-center space-y-2'>
            <div className='text-center space-y-2'>
             <h2 text-lg font-semibold>
                Oops! Your payment failed
             </h2>
             <p className='text-left'>
                Please try again later
             </p>
             <RxCrossCircled className='text-red-500 text-5xl'/>
            </div>
            <Link to='/checkout' className='bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-semibold rounded-br-lg  rounded-bl-lg'>
            <button
            >Try again</button>
            </Link>
            </div>
            </div>

        </div>
    </HomeLayout>

  )
}

export default CheckoutFailure;