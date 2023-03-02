import {apiNamoz} from './api'
import {AxiosResponse} from "axios";

const NamozService={
    async getNamoz<T>():Promise<T>{
        const response:AxiosResponse<T> =await apiNamoz.get('')
        const data:T=response.data
        return data
    }
}

export default NamozService