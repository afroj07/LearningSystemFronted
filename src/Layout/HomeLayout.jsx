import React from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
const HomeLayout = ({children}) => {

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
                <ul className='menu p-4 w-48 sm:w-80  bg-gray-800  text-gray-200  relative'>
                    <li className='w-fit absolute right-2 z-50 '> 
                    <button onClick={hideDrawer}>
                        <AiFillCloseCircle size={24}/>
                    </button>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/">Home</Link>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/courses">All Courses</Link>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='hover:bg-slate-600'>
                      <Link to="/about">About Us</Link>
                    </li>
                </ul>
            </div>
        </div>
        
        {children}

        <Footer/>
    </div>
  )
}

export default HomeLayout