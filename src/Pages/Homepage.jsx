import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Link } from 'react-router-dom';
import Img from '../assets/Images/homePageMainImage.png'

const Homepage = () => {
  return (
    <HomeLayout>
        <div className='pt-10 text-white flex items-center  justify-center  gap-10 mx-16 h-[90vh]'>
            <div className="w-1/2 space-y-6">
                <h1 className='text-4xl font-semibold'>
                    Find out best
                    <span className='text-yellow-400  font-bold'>
                        Online Courses
                    </span>
                </h1>
                <p className='text-xl text-gray-200'>
                    we have a large liberary of course tought by highly skilled and qualified faculties at a very affordable cost.
                </p>
                <div className='space-x-6'>
                    <Link to='/courses'>
                        <button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold cursor-pointer text-lg hover:bg-yellow-600 transition-all ease-in-out duration-3'>
                            Explore courses
                        </button>
                    </Link>

                    <Link to='/contact'>
                        <button className='border border-yellow-500 px-5 py-3 rounded-md font-semibold cursor-pointer text-lg hover:bg-yellow-600 transition-all ease-in-out duration-3'>
                            Contact US
                        </button>
                    </Link>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
               <img   src={Img} alt="HomePage Image" />
            </div>

        </div>
    </HomeLayout>
  )
}

export default Homepage