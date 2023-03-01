import SurahLib from "@/lib/surah";
import {AyahsI, AyahsText, AyahsTextRes, DetailSurahI, DetailSurahRes, SurahI, SurahRes} from "@/interfaces";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import SurahDetailCard from "@/components/surah-detail-card";
import {useAppDispatch, useAppSelector} from "@/store/hook";
import {getSurahDetailSuccess, selectedAuthor} from "@/slice/surahDetail";
import authorJson from '@/components/author-audio.json'
import AuthorAudio from "@/components/author-audio";
import store from "@/store";

interface queryI{
    query:{
        surahId: string
    }
}

interface ayahsI {
    surahId: string
}

const SurahDetail = ({surahId}:ayahsI) => {
    const [ayahText, setAyahText] = useState<AyahsText[] | []>([])
    const router = useRouter()
    const dispatch = useAppDispatch()
    const {author, surahDetail} = useAppSelector((state) => state.surahDetail);
    const {languages} = useAppSelector((state) => state.surahDetailText);
    const getSurahDetailText = async (): Promise<void> => {
        try {
            const data = await SurahLib.getSurahText<AyahsTextRes>(`${surahId}`, languages);
            setAyahText(data.data.ayahs)
        } catch (error) {
            console.log(error);
        }
    };

    const getSurahDetailAyahs = async (): Promise<void> => {
        try {
            const data = await SurahLib.getSurahDetail<DetailSurahRes>(`${surahId}`, author)
            dispatch(getSurahDetailSuccess(data.data.ayahs))

            console.log(data.data.ayahs)
        } catch (error) {
            console.log(error)
        }
    }
    const authorAudioHandler = (authorAudio: string) => {
        dispatch(selectedAuthor(authorAudio))
    }

    useEffect(() => {
            getSurahDetailText()
    }, [languages])
    useEffect(() => {
            getSurahDetailAyahs()
    }, [author])


    return (
        <div>
            <div className="flex items-center space-x-10 mb-10 overflow-x-auto ">
                {authorJson.map(item => (
                    <AuthorAudio author={item} authorAudio={authorAudioHandler} key={item.name}/>
                ))}


            </div>
            {ayahText.map((item, ind) => (
                <SurahDetailCard ayahs={item} ind={ind} audio={surahDetail} key={item.number}/>
            ))}
        </div>
    )
}
export default SurahDetail

SurahDetail.getInitialProps=async ({query}:queryI)=>{
    return {surahId:query.surahId}
}


// export async function getServerSideProps(context:ContextI){
//     const {params} =context
//     const state=store.getState()
//     const author=state.surahDetail.author
//     console.log(author)
//     try {
//         const data=await SurahLib.getSurahDetail<DetailSurahRes>(params.surahId,state.surahDetail.author)
//         const data1:DetailSurahI=data.data
//         return {
//             props:{
//                 ayahs:data1.ayahs,
//             }
//         }
//     }catch (error){
//         console.log(error)
//     }
//
// }
