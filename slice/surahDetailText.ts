import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface surahDetailTextI{
    languages:string
}

const initialState:surahDetailTextI= {
    languages:'uz.sodik'
}

export const SurahDetailTextSlice = createSlice({
    name: 'surahDetail',
    initialState,
    reducers: {

        selectedLanguage:(state,{payload}:PayloadAction<string>)=>{
            state.languages=payload
        }
    }
})
export const {selectedLanguage} = SurahDetailTextSlice.actions
export default SurahDetailTextSlice.reducer