import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosinstance";


const initialState={
    courseData:[]
}


export const getAllCourses = createAsyncThunk('/course/get', async()=>{
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
builder.addCase(getAllCourses.fulfilled,(state, action)=>{
    if(action.payload){
        console.log(action.payload);
        state.courseData=[...action.payload];
    }
})
    }
});

export default CourseSlice.reducer;