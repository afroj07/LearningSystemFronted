import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
const HomeLayout = ({children}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // checking user logedin
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

    // for displatyig the option acc role
const role = useSelector((state)=>state?.auth?.role);

    function changewidth(){
        const drawSide = document.getElementsByClassName('drawer-side');
        drawSide[0].style.width="auto";
    }
    const hideDrawer = ()=>{
        const element = document.getElementsByClassName('drawer-toggle');
        element[0].checked=false;
        const drawSide = document.getElementsByClassName('drawer-side');
        drawSide[0].style.width=0;
      
    }

    async function handleLogout(e){
      e.preventDefault();
      //if(res?.payload?.success);
     // const res= await dispatch(logout());

     navigate('/');
    }
  return (
    <div className='min-h-[90vh]'> 
        <div className='drawer absolute left-0 z-50 w-fit'>
            <input className='drawer-toggle' id='my-drawer' type="checkbox" />

            <div className="drawer-content">
                <label htmlFor="my-drawer" className='cursor-pointer relative'>
                    <FiMenu size={'32px'} 
                    onClick={changewidth}
                    className='font-bold text-gray-400 m-4'/>
                    </label>
            </div>
            <div className="drawer-side w-0 ">
                <label htmlFor="my-drawer" className='drawer-overlay'>  
                </label>
                <ul className='menu p-4 w-48  sm:w-80  bg-gray-800  text-gray-200  relative'>
                    <li className='w-fit absolute right-2 z-50 '> 
                    <button onClick={hideDrawer}>
                        <AiFillCloseCircle size={24}/>
                    </button>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/">Home</Link>
                    </li>
                    {isLoggedIn && role=== 'ADMIN' &&(
                      <li>
                        <Link to='/admin/dashboard'>Admin DashBoard</Link>
                      </li>
                    )}
                    <li className='hover:bg-slate-600'>
                      <Link to="/courses">All Courses</Link>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/about">About Us</Link>
                    </li>
                    {!isLoggedIn && (
                    <li className='   w-[90%]'>
                    <div className='w-full flex items-center justify-center '>
                      <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                       <Link to="/login">Login</Link>
                      </button>
                      <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                       <Link to="/login">SignUp</Link>
                      </button>

                    </div>
                    </li>
                    )
                    }
                       {isLoggedIn && (
                    <li className=' w-[90%]'>
                    <div className='w-full flex items-center justify-center '>
                      <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                       <Link to="/user/profile">Profile</Link>
                      </button>
                      <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                       <Link onClick={handleLogout}>Logout</Link>
                      </button>

                    </div>
                    </li>
                    )
                    }

                </ul>
            </div>
        </div>
        
        {children}

        <Footer/>
    </div>
  )
}

export default HomeLayout