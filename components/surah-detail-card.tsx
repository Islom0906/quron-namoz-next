import {AyahsI, AyahsText} from "@/interfaces";
import {useRouter} from "next/router";
import {useEffect, useRef} from "react";
import {useAppSelector} from "@/store/hook";
import AudioPlayer from "@/components/audio-player";

interface DetailCardI {
    ayahs: AyahsText
    ind: number
    audio: AyahsI[]
}

const SurahDetailCard = ({ayahs, ind, audio}: DetailCardI) => {
    const {query} = useRouter()
    const {audioId} = useAppSelector(state => state.surahDetail)
    const ayahsCard = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ayahsCard.current) {
            if (audioId === ind + 1) {
                window.scrollTo(0, ayahsCard?.current?.offsetTop - window.innerHeight + ayahsCard?.current?.clientHeight + 50)
            }

        }
    }, [audioId])

    return (
        <>
            <div className="p-6 bg-white rounded-xl w-full space-y-10 mb-10" ref={ayahsCard}>
                <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{query.surahId}:{ind + 1}</span>
                </div>
                <div className=" sm:w-4/5 mx-auto sm:space-y-10 space-y-5">
                    <p className="font-bold sm:text-xl text-base text-center">{audio[ind]?.text}</p>
                    <h1 className=" sm:text-xl text-base font-mono text-primary text-center ">
                        {ayahs.text}
                    </h1>
                </div>
                <AudioPlayer audios={audio} ind={ind}/>
            </div>
        </>
    )
}
export default SurahDetailCard