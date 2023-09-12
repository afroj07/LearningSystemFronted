import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import AboutMainImg from '../assets/Images/aboutMainImage.png'
import apj from '../assets/Images/apj.png'
import billGates from '../assets/Images/billGates.png'
import einstein from '../assets/Images/einstein.png'
import steveJobs from '../assets/Images/steveJobs.png'
import  nelsonMandela from '../assets/Images/nelsonMandela.png'

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
  <div id="slide1" className="carousel-item relative w-full">
  <div className=' w-[60%] flex flex-col m-auto items-center justify-center gap-4 px-[15%]'>
    <img src={nelsonMandela} className="w-40  rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>
        {
            " \"Education is the most powerful tool you can use to change the world.\" "
        }
    </p>
    <h3 className='text-2xl fonst-semibold'>Nelson mandela</h3>
    <div className="absolute w-1/2 m-auto flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className='flex flex-col   w-[60%] m-auto items-center justify-center gap-4 px-[15%]'>
    <img src={apj} className="w-40  rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>
        {
           " If you fail, never give up because FAIL means \"First Attempt In Learning\" "
        }
    </p>
    <h3 className='text-2xl fonst-semibold'>APJ Abdul Kalam</h3>
    <div className="absolute w-1/2 m-auto flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className='flex flex-col  w-[60%] m-auto items-center justify-center gap-4 px-[15%]'>
    <img src={einstein} className="w-40  rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>
        {
            "\"Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”"
        }
    </p>
    <h3 className='text-2xl fonst-semibold'>Albert Einstein</h3>
    <div className="absolute  w-1/2 m-auto flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
   <div className='flex  w-[60%] m-auto flex-col items-center justify-center gap-4 px-[15%]'>
      <img src={steveJobs} className="w-40  rounded-full border-2 border-gray-400" />
      <p className='text-xl text-gray-200'>
            { 
            "“Don't let the noise of others' opinions drown out your own inner voice.”"
        }
    </p>
    <h3 className='text-2xl fonst-semibold'>Steve Jobs</h3>
      <div className="absolute  w-1/2 m-auto flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
         <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
   </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className='flex flex-col w-[60%] m-auto items-center justify-center gap-4 px-[15%]'>
    <img src={billGates} className="w-40  rounded-full border-2 border-gray-400" />
    <p className='text-xl text-gray-200'>
        {
            "“We all need people who will give us feedback. That’s how we improve.”"
        }
    </p>
    <h3 className='text-2xl fonst-semibold'>Bill Gates</h3>
    <div className="absolute w-1/2 m-auto flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
    </div>
  </div>
</div>
 </div>
</HomeLayout>

  )
}

export default AboutUs