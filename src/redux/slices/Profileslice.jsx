import { createSlice } from "@reduxjs/toolkit";
import reviews from "../../data"; 

const initialState={
    response:reviews,
    index:0
}
export const Profileslice=createSlice({
    name:"profile",
    initialState,
    reducers:{
    
        increament:(state)=>{
        if(state.index===state.response.length-1){
            state.index=0;
        }
        else{
            state.index+=1;
        }
      },

    decreament:(state)=>{
        if(state.index===0){
            state.index=state.response.length-1
        }
        else{
            state.index-=1;
        }
    },

    Surprise:(state)=>{

        let num=Math.floor(Math.random()*state.response.length)
        state.index=num
    }, 
}
})

export const {increament,decreament,Surprise}=Profileslice.actions

export default Profileslice.reducer;