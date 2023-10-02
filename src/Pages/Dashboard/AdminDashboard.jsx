import React, { useEffect } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import {Chart as Charjs, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale, Title} from 'chart.js'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCourse, getAllCourses } from '../../Redux/Slices/CourseSlice';
import {  getStatsData } from '../../Redux/Slices/StatSlice';
import { getPaymentRecord } from '../../Redux/Slices/RazorpaySlice';
import {Bar, Pie} from 'react-chartjs-2'
import {FaUsers} from 'react-icons/fa'
import {GiMoneyStack} from 'react-icons/gi'
import {FcSalesPerformance} from 'react-icons/fc'
import { BsCollectionPlayFill, BsTrash } from 'react-icons/bs';
Charjs.register(ArcElement, BarElement, CategoryScale, Title, Tooltip, Legend, LinearScale);

const AdminDashboard = () => {
const dispatch = useDispatch();
const  navigate = useNavigate();
const [allUsersCount, subscribedCount]= useSelector((state)=> state.stat);
const[allPayments, monthlySalesRecords] = useSelector((state)=>state.razorpay);

const userData ={
    labels:["Registered User", "Enrolled User"],
    fontColor:"white",
    datasets: [
         {
        label:"User Details",
        data:[allUsersCount, subscribedCount],
        backgroundColor:["yellow", "green"],
        borderWidth:1,
        borderColor:["yellow", "green"]
    }
]
};

const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May" , "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    fontColor:"white",
    datasets:[
        {
            lable:"Sales/Month",
            data:monthlySalesRecords,
            backgroundColor:["rgb(255,99,132)"],
            borderColor:["white"],
            borderWidth:2
        }
    ]
}

const myCourse = useSelector((state)=>state?.course?.courseData);

async function onCourseDelete(id){
    if(window.confirm("Are you sure you want to delete the coursr?")){
        const res = dispatch(deleteCourse(id));
        if(res?.payload?.success){
            await dispatch(getAllCourses());
        }
    }
}
useEffect(()=>{
    (
        async ()=>{
            await dispatch(getAllCourses());
            await dispatch(getStatsData());
            await dispatch (getPaymentRecord());
        }
    )
})
return (
   <HomeLayout>
     <div className='min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white '>
       <h1 className='text-center text-5xl font-semibold text-yellow-500'>
         Admin Dashboard
       </h1>
       <div className='grid grid-cols-2 gap-5 m-auto mx-10'>
           <div className='flex flex-col items-center gap-10 p-5 shadow-lg rounded-md'>
             <div className='w-80 h-80'>
              <Pie data={userData}/>
             </div>
             <div className='grid grid-cols-2 gap-5'>
                <div className='flex items-center justify-between p-5 gap-5 rounded-md shadow-lg'>
                   <div className='flex flex-col items-center'>
                     <p className='font-semibold'>
                        Registered Users
                     </p>
                     <h3 className='text-4xl font-bold'>
                        {allUsersCount}
                     </h3>
                   </div>
                   <FaUsers className='text-yellow-500 text-5xl'/>
                </div>

                <div className='flex items-center justify-between p-5 gap-5 rounded-md shadow-lg'>
                   <div className='flex flex-col items-center'>
                     <p className='font-semibold'>
                        Subscribed  Users
                     </p>
                     <h3 className='text-4xl font-bold'>
                        {subscribedCount}
                     </h3>
                   </div>
                   <FaUsers className='text-green-500 text-5xl'/>
                </div>

             </div>
           </div>
        <div className='flex flex-col items-center gap-10 p-5 shadow-lg rounded-md '>
             <div className='h-80 w-full relative'>
              <Bar className='absolute bottom-0 h-80 w-full' data={salesData}/>
             </div>
             <div className='grid grid-cols-2 gap-5'>
                 <div className='flex items-center justify-between p-5 gap-5 rounded-md shadow-lg'>
                   <div className='flex flex-col items-center'>
                     <p className='font-semibold'>
                        Subscription Count
                     </p>
                     <h3 className='text-4xl font-bold'>
                        {allPayments?.count}
                     </h3>
                   </div>
                   <FcSalesPerformance className='text-yellow-500 text-5xl'/>
                </div>

                <div className='flex items-center justify-between p-5 gap-5 rounded-md shadow-lg'>
                   <div className='flex flex-col items-center'>
                     <p className='font-semibold'>
                        Total Revanue
                     </p>
                     <h3 className='text-4xl font-bold'>
                        {allPayments?.count*499}
                     </h3>
                   </div>
                   <GiMoneyStack className='text-green-500 text-5xl'/>
                </div>
             </div>
        </div>

       </div>

       <div className='mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10'>
         <div className='flex w-full items-center justify-between'>
               <h1 className='text-center text-3xl font-semibold'>
                  Courses overview
               </h1>
               <button onClick={()=>navigate('/course/create')}
                className='w-fit bg-yellow-400 hover:bg-yellow-600 transition-all ease-in-out duration-300 py-2 px-4 rounded font-semibold text-xl cursor-pointer '>
                      Create new course
               </button>
         </div>
         <table className=' table overflow-x-scroll'>
               <thead>
                  <tr>
                     <th>S No.</th>
                     <th>Course Title</th>
                     <th>Course Category</th>
                     <th>Instructor</th>
                     <th>Total lecture</th>
                     <th>Description</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {myCourse?.map((course, idx)=>{
                     return(
                        <tr key={course._id}>
                           <td>{idx+1}</td>
                           <td>
                              <textarea readOnly value={course?.title} 
                              className='w-40 h-auto bg-transparent resize-none'></textarea>
                           </td>
                           <td>{course?.category}</td>
                           <td>{course.createdBy}</td>
                           <td>{course.numberOfLectures}</td>
                           <td className='max-28 overflow-hidden text-ellipsis whitespace-nowrap'> 
                              <textarea readOnly value={course?.description}
                              className='w-80 h-auto bg-transparent resize-none'></textarea>
                           </td>
                           <td className='flex items-center gap-4'>
                              <button
                              className='bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold '
                               onClick={()=>navigate('/course/displaylectures', {state:{...course}})}>
                                  <BsCollectionPlayFill/>
                              </button>
                              <button
                              className='bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold '
                               onClick={()=>onCourseDelete(course?._id)}>
                                  <BsTrash/>
                              </button>

                           </td>
                        </tr>
                     )
                  })}
               </tbody>
         </table>
       </div>
     </div>
   </HomeLayout>

  )
}

export default AdminDashboard;