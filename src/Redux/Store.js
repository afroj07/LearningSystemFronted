import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import RazorpaySliceReducer from "./Slices/RazorpaySlice";
import lectureSliceReducer  from "./Slices/LectureSlice";

const Store = configureStore({
    reducer:{
        auth:authSliceReducer,
        course:CourseSliceReducer,
        razorpay: RazorpaySliceReducer,
        lecture: lectureSliceReducer,
    },
    devTools:true
})
export default Store;