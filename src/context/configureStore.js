import { configureStore } from "@reduxjs/toolkit";
import messagesReducer from './messagesSlice'



export const store=configureStore({
    reducer:{
        counter:messagesReducer,
    }
})
