import {configureStore} from '@reduxjs/toolkit'
import SurahReducer from '@/slice/surah'
import SurahDetailReduser from '@/slice/surahDetail'
import SurahDetailTextReduser from '@/slice/surahDetailText'
import NamozReducer from '@/slice/namoz'
const store = configureStore({
    reducer:{
        surah:SurahReducer,
        surahDetail:SurahDetailReduser,
        surahDetailText:SurahDetailTextReduser,
        namoz:NamozReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})
export default store

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
