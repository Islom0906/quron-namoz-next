import axios, {AxiosInstance} from "axios";


export const apiSurah:AxiosInstance=axios.create({
    baseURL:'https://api.alquran.cloud/v1'
})
export const apiNamoz:AxiosInstance=axios.create({
    baseURL:'https://islomapi.uz/api/present/day?region=Toshkent'
})
