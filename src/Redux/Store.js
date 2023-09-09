import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './Slices/AuthSlice';

const Store = configureStore({
    reducer:{
        auth:authSliceReducer,
    },
    devTools:true
})
export default Store;