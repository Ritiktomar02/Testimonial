import { configureStore } from "@reduxjs/toolkit";
import {Profileslice} from "./slices/Profileslice";


export const store=configureStore({
    reducer:{
       profile:Profileslice.reducer
    }
})