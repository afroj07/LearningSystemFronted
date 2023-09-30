
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
import axiosInstance from '../../Helpers/axiosinstance';
const initialState ={
    lectures:[]
}

 export const getCourseLectures = createAsyncThunk('course/lecture/get', async(cid)=>{
   try {

     const response = axiosInstance.get(`/courses/${cid}`);
     toast.promise(response, {
        loading:"Featching course lectures",
        success:"Lectures fetched successfully",
        error:"Failed to load the lectures"
     })
  return (await response).data;

   } catch (error) {
     toast.error(error?.response?.data?.message)
   }
 });
 export const addCourseLectures = createAsyncThunk('course/lecture/add', async(data)=>{
    try {
        const formData = new FormData();
      formData.append("lectures", data.lecture);
      formData.append("tittle", data.tittle);
      formData.append("description", data.description);
      const response = axiosInstance.post(`/courses/${data.id}`, formData);
      toast.promise(response, {
         loading:"Adding course lectures",
         success:"Lectures added successfully",
         error:"Failed to add the lectures"
      })
   return (await response).data;
 
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  });

  export const deleteCourseLectures = createAsyncThunk('course/lecture/delete', async(data)=>{
    try {
        
      const response = axiosInstance.delete(`/courses?courseId=${data.courseId} & lectureId=${data.lectureId}`);
      toast.promise(response, {
         loading:"Deleting course lectures",
         success:"Lectures deleted successfully",
         error:"Failed to delete the lectures"
      })
   return (await response).data;
 
    } catch (error) {
      toast.error(error?.response?.data?.message)
    }
  });

const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLectures.fulfilled,(state, action)=>{
            state.lectures =action?.payload?.lectures;
        })
        .addCase(addCourseLectures.fulfilled, (state, action)=>{
            state.lectures =action?.payload?.course?.lectures;
        })
    }

})

export default lectureSlice.reducer;