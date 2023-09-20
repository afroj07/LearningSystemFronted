import './App.css';

import { Route, Routes } from 'react-router-dom';

import Homepage from './Pages/Homepage'
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import CourseList from './Pages/Course/CourseList';
import Contact from './Pages/Contact';
import Denied from './Pages/Denied';
function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/courses' element={<CourseList/>}/>
        <Route path='/login' element={<Login/>}/>  
       <Route path='/signup'  element={<SignUp/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/denied' element={<Denied/>}/>
       <Route path='*' element={<NotFound/>}/>
    
    </Routes>
  
   
    </>
  )
}

export default App
