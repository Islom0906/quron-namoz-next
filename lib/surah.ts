import {apiSurah} from './api'
import {AyahsI, DetailSurahI, SurahI} from "@/interfaces";
import { AxiosResponse} from "axios";


const SurahLib={
    async getSurah<T>():Promise<T>{
        const response:AxiosResponse<T> = await apiSurah.get('/surah')
        const data:T=response.data

        return data
    },
    async getSurahDetail<T>(number:string,author:string):Promise<T>{
        const response:AxiosResponse<T> =await apiSurah.get(`/surah/${number}/${author}`)
        const data:T=response.data
        return data
    },
    async getSurahText<T>(number:string,lang:string):Promise<T>{
        const response:AxiosResponse<T> =await apiSurah.get(`/surah/${number}/${lang}`)
        const data:T=response.data
        return data
    }
}

export default SurahLib

