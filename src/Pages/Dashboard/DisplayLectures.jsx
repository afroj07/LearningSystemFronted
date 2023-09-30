import React, { useEffect, useState } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCourseLectures, getCourseLectures } from '../../Redux/Slices/LectureSlice';

const DisplayLectures = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const {state} = useLocation();
const {lectures} = useSelector((state)=>state.lecture);
const {role} = useSelector((state)=>state.auth);

async function OnLectureDelete(courseId, lectureId){
    await dispatch(deleteCourseLectures({
       courseId:courseId, lectureId:lectureId
    }));
    await dispatch(getCourseLectures(courseId))
}


const [currentVideo, setcurrentVideo] = useState(0);
useEffect(()=>{
  if(!state){
     navigate('/courses')
    };
  dispatch(getCourseLectures(state._id));
}, []);


  return (
   <HomeLayout>
      <div className='flex flex-col gap-10 ite  justify-center min-h-[90vh] py-10 text-white mx-5 '>
          <div className='text-center text-2xl font-semibold text-yellow-500'>
              Course Name:{state?.tittle}
          </div>
          {lectures && lectures.length>0 && <div className='flex justify-center gap-10 w-full'>
             {/*left section for playing videos */}
             <div className='space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]'>
             <video 
             src={lectures && lectures[currentVideo]?.lecture?.secure_url}
             className='object-fill roudend-tl-lg rounded-tr-lg w-full'
             controls
             disablePictureInPicture
             muted
             controlsList='nodownload'
             ></video>
             <div>
                <h1>
                    <span className='text-yellow-500'>
                        Tittle:{" "}
                    </span>
                    {lectures && lectures[currentVideo]?.tittle}
                </h1>
                <p>
                    <span className='text-yellow-500 line-clamp-4'>
                        Description:{" "}
                    </span>
                    {lectures && lectures[currentVideo]?.description}
                </p>
             </div>
             </div>
             {/*right section */}
             <ul className='w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4'>
                <li className='font-semibold text-xl text-yellow-500 text-center justify-between'>
                    <p>
                        Lectures list
                    </p>
                    {role === 'ADMIN' && (
                        <button 
                        onClick={()=>navigate('/course/addlecture', {state: {...state}})}
                        className='btn-primary py-1 px-2  rounded-md text-sm'>
                            Add new lecture
                        </button>
                    )}
                </li>
                {lectures && lectures.map((lecture, idx)=>{
                    return(
                        <li className='space-y-2' key={lecture._id}>
                          <p className='cursor-pointer'
                          onClick={()=>setcurrentVideo(idx)}
                          >
                            <span>
                                {" "} Lecture {idx+1} :{" "}
                            </span>
                             {lecture?.tittele}
                          </p>
                          {role === 'ADMIN' && (
                        <button 
                        onClick={()=>{OnLectureDelete(state?._id, lecture?._id)}}
                        className='btn-accent py-1 px-2  rounded-md text-sm'>
                            Delete lecture
                        </button>
                    )}
                        </li>
                    )
                })
                }
             </ul>
          </div>}
      </div>

   </HomeLayout>
  )
}

export default DisplayLectures