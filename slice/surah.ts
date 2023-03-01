import { createSlice } from '@reduxjs/toolkit'
import {surahObj} from "@/interfaces";


const initialState:surahObj = {
    isLoading: false,
    search:"",
    error: ''
}

export const surahSlice = createSlice({
    name: 'surah',
    initialState,
    reducers: {
        getSurahStart: (state) => {
            state.isLoading = true
        },
        getSurahSuccess: (state) => {
            state.isLoading = false
        },
        getSurahFailure: (state) => {
            state.isLoading = false
            state.error = 'Get surah error'
        },
        // searchSurah:(state,{payload})=>{
        //     state.search=payload
        // }
    }
})

export const { getSurahFailure, getSurahStart, getSurahSuccess} = surahSlice.actions
export default surahSlice.reducer