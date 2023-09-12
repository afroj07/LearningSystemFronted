import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import AboutMainImg from '../assets/Images/aboutMainImage.png'
import CarouselSlide from '../components/CarouselSlide'

import {celebrities} from '../Constant/CelebrityData';

const AboutUs = () => {




  return (
<HomeLayout>
    <div className='pl-20 pt-20 flex flex-col text-white'>
        <div className='flex items-center gp-5 mx-10'>
            <section className='w-1/2 space-y-10'>
                <h1 className='text-5xl text-yellow-500 font-semibold'>
                    Affrodable and quality education
                </h1>
                <p className='text-xl text-gray-200'>
                    Our goal is to provide the affordable and quality eduaction to the world.
                    We are providing the platform for the teachers and students to share their 
                    skills, creative and knowledge to each other to empower and contribute  in 
                    the growth and wellnwness of mankind. 
                </p>

            </section>
            <div className='w-1/2'>
                   <img className='drop-shadow-2xl ' id='test1' 
                    style={{ filter:'drop-shadow(0px 10px 10px rgb(0,0,0))'}}
                   src={AboutMainImg} alt="AboutMAinImage" />
            </div>

        </div>
        <div className="carousel w-full items-center my-16 m-auto">
      {celebrities && celebrities.map((celebrity)=><CarouselSlide
        {...celebrity}
         key={celebrity.slideNumber} 
          totalSlide={celebrities.length}
          />)}
       
    </div>
  
 </div>
</HomeLayout>

  )
}

export default AboutUs