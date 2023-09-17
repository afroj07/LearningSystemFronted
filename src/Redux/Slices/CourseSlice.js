import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";
import { Await } from "react-router-dom";

const initialState={
    courseData:[]
}


export const getAllCourse = createAsyncThunk('/course/get', async()=>{
    try {
        
        const response = axiosInstance.get('/courses');
        toast.promise(response,{
            loading:"loading course data...",
            success:"Course loaded  successfully",
            error:"Failed to get the course"
        });
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        
    }
})

const CourseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{

    }
});

export default CourseSlice.reducer;