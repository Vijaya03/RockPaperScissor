import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json'
const pickedData = createSlice({
    name:"pickSelection",
    initialState:{
       selectionData:{
            index:"",
            name:"",
            color:"" ,
            title:""
       },
       fullData:data
    },
    reducers:{
        pickedValue(state,action){
            state.selectionData = action.payload
            console.log(state.selectionData)
        }
    }
})
export const pickedDataAction = pickedData.actions;
export default pickedData;