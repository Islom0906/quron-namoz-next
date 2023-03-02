import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {TimesI} from "@/interfaces";

interface NamozInitialI{
    isLoading:boolean
    times:TimesI
    error:string
}

const initialState={
    isLoading:false,
    times:{},
    error:''
}

const NamozSlice=createSlice({
    name:"namoz",
    initialState,
    reducers:{
        getNamozStart:(state)=>{
            state.isLoading=true
        },
        getNamozSuccess:(state,{payload}:PayloadAction<TimesI>)=>{
            state.isLoading=false
            state.times=payload
        },
        getNamozFaliure:(state)=>{
            state.isLoading=false
            state.error='Error get namoz time'
        }
    }
})

export const {getNamozFaliure,getNamozStart,getNamozSuccess}=NamozSlice.actions
export default NamozSlice.reducer