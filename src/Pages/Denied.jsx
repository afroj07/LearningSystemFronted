import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Denied = () => {
const navigate = useNavigate();
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]'>
        <h1 className=' font-extrabold text-9xl text-white tracking-widest'>
             403
        </h1>
        <div className='bg-black text-white px-2 text-lg rounded rotate-12 absolute'>
            Access denied
        </div>
        <button onClick={()=>navigate(-1)} className='mt-5'>
          <span className='relative block px-8 text-white py-3 border border-current bg-[#1A2238] hover:bg-gray-600'>
           Go Back
          </span>
        </button>
    </main>
    
  )
}

export default Denied;