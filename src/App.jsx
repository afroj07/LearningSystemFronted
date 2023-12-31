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
import  CourseDescription  from './Pages/Course/CourseDescription';
import RequireAuth from './components/Auth/RequireAuth';
import CreateCourse from './Pages/Course/CreateCourse';
import Profile from './Pages/user/Profile';
import EditProfile from './Pages/user/EditProfile';
import Checkout from './Pages/payments/Checkout';
import CheckoutSuccess from './Pages/payments/CheckoutSuccess';
import CheckoutFailure from './Pages/payments/CheckoutFailure';
import DisplayLectures from './Pages/Dashboard/DisplayLectures';
import AddLecture from './Pages/Dashboard/AddLecture';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
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
      <Route path='/course/description' element={<CourseDescription/>}/>
       
        <Route element={<RequireAuth allowedRoles={['ADMIN']}/>}> 
        <Route path='/course/create' element={<CreateCourse/>}/>
        <Route path='/course/addlecture' element={<AddLecture/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        </Route> 

        {/* <Route element={<RequireAuth allowedRoles={[ "ADMIN", "USER"]}/>}>  */}
        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/user/editprofile' element={<EditProfile/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='checkout/success' element={<CheckoutSuccess/>}/>
        <Route path='checkout/failure' element={<CheckoutFailure/>}/>
         <Route path='/course/displaylectures' element={<DisplayLectures/>}/>
        {/* </Route>  */}

       <Route path='*' element={<NotFound/>}/>
    
    </Routes>
  
   
    </>
  )
}

export default App
