import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {AyahsI} from "@/interfaces";

export interface initialStateDetail {
    audio:string
    audioId:number
    author:string
    isPlaying:boolean
    surahDetail:AyahsI[]
}

const initialState:initialStateDetail = {
    audio:"",
    audioId:0,
    surahDetail: [],
    author:'ar.alafasy',
    isPlaying:false,
}

export const SurahDetailSlice = createSlice({
    name: 'surahDetail',
    initialState,
    reducers: {
        seletedAudio:(state, {payload}:PayloadAction<string>)=>{
            state.audio=payload
        },
        getSurahDetailSuccess:(state,{payload}:PayloadAction<AyahsI[]>)=>{
            state.surahDetail=payload
        },
        selectedAuthor:(state,{payload}:PayloadAction<string>)=>{
            state.author=payload
        },
        setIsPlaying:(state,{payload}:PayloadAction<boolean>)=>{
            state.isPlaying=payload
        },
        setAudioId:(state,{payload}:PayloadAction<number>)=>{
            state.audioId=payload
        }
    }
})
export const {seletedAudio,selectedAuthor,getSurahDetailSuccess,setIsPlaying,setAudioId} = SurahDetailSlice.actions
export default SurahDetailSlice.reducer