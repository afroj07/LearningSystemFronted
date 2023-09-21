import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createNewCourse } from '../../Redux/Slices/CourseSlice';
import HomeLayout from '../../Layout/HomeLayout';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const CreateCourse = () => {

  const dispatch = useDispatch();
  const navigate =  useNavigate();

  const[userInput, setUserInput]=useState({
     tittle:"",
     category:"",
     createdBy:"",
     description:"",
     thumbnail:null,
     previewImage:""
  });

  const  handleImageUpload= (e)=> {
    e.preventDefault();
    const uploadedImage= e.target.files[0];
    if(uploadedImage){
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function(){
        setUserInput({
          ...userInput,
          previewImage:this.result,
          thumbnail:uploadedImage
        })
      })
    }
}

function handleUserInput(e){
  const{name, value} = e.target;
  setUserInput({
    ...userInput,
    [name]:value
  })
}

async function onFormSubmit(e){
  e.preventDefault();
  if(!userInput.tittle || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy){
    toast.error("All fields are mandatoy");
    return;
  }

  const responce = await dispatch(createNewCourse(userInput));
  if(responce?.payload?.success){
    setUserInput({
      tittle:"",
      category:"",
      createdBy:"",
      description:"",
      thumbnail:null,
      previewImage:""
    })
     navigate('/course');

  }

}

  return (
    
    <HomeLayout>
      <div className='flex items-center justify-center h-[100vh]'>
        <form 
         onSubmit={onFormSubmit}
         className='flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700] my-10 shadow-[0_0_10px_black] relative'>
         
           <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
            <AiOutlineArrowLeft/>
           </Link>
          <h1 className='text-center text-2xl font-bold'>
            Create New Course
          </h1>
          <main className='grid grid-cols-2 gap-x-10 '>
             <div className='gap-y-6'>
                <div>
                  <label htmlFor="image_uploads" className='cursor-pointer'>
                          {userInput.previewImage?(
                            <img 
                              className='w-full h-44 m-auto border ' 
                            src={userInput.previewImage} 
                            alt="courseImage" />
                          ):( 
                            <div className='w-full h-44 m-auto flex items-center justify-center border'>
                              <h1 className='font-bold p-4 text-lg '>
                                  Upload your course thumbnail
                              </h1>
                            </div>
                          )
                          }
                  </label>
                  <input
                  className='hidden'
                  type="file" 
                  id='image_uploads'
                  accept='.jpg, .jpeg, .svg, .png'
                  name='image_uploads'
                  onChange={handleImageUpload}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                 <label htmlFor="tittle" className='text-lg font-semibold'>
                  Course tittle
                 </label>
                 <input
                 required
                 name='tittle'
                 id='tittle'
                 placeholder='Enter course tittle'
                 className='bg-transparent px-2 py-1 border'
                 type="text"
                 value={userInput.tittle}
                 onChange={handleUserInput}
                 />
                </div>
             </div>

             <div className='flex flex-col gap-1'>
             <div className='flex flex-col gap-1'>
                 <label htmlFor="createdBy" 
                 className='text-lg font-semibold'>
                  Course Instructor
                 </label>
                 <input
                 required
                 name='createdBy'
                 id='createdBy'
                 placeholder='Enter course Instuctor'
                 className='bg-transparent px-2 py-1 border'
                 type="text"
                 value={userInput.createdBy}
                 onChange={handleUserInput}
                 />
                </div>
                <div className='flex flex-col gap-1'>
                 <label htmlFor="category" className='text-lg font-semibold'>
                  Course Category
                 </label>
                 <input
                 required
                 name='category'
                 id='category'
                 placeholder='Enter course category'
                 className='bg-transparent px-2 py-1 border'
                 type="text"
                 value={userInput.category}
                 onChange={handleUserInput}
                 />
                </div>
                <div className='flex flex-col gap-1'>
                 <label htmlFor="description" className='text-lg font-semibold'>
                  Course description
                 </label>
                 <textarea 
                 required
                 name="description" id="description" 
                 placeholder='Enter course description'
                 className='bg-transparent px-2 py-1 h-24 overflow-y-scroll resize-none border'
                 value={userInput.description}
                 onChange={handleUserInput}
                 ></textarea>
                </div>
             </div>
          </main>
           <button
           type='submit'
            className='w-full bg-yellow-600 py-2   rounded-sm font-semibold text-lg hover:bg-yellow-500 transition-all ease-in-out'>
            Create Course
           </button>
         </form>
      </div>
      
    </HomeLayout>
  )
}

export default CreateCourse;