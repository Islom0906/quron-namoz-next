import {useAppDispatch, useAppSelector} from "@/store/hook";
import {seletedAudio, setAudioId, setIsPlaying} from "@/slice/surahDetail";
import {AyahsI} from "@/interfaces";
import {useState} from "react";

interface AudioPlayerI{
    audios:AyahsI[]
    ind:number
}
const AudioPlayer = ({ audios, ind }:AudioPlayerI) => {


    const { isPlaying, audioId } = useAppSelector(state => state.surahDetail)
    const dispatch = useAppDispatch()

    const PlayPause = () => {
        dispatch(seletedAudio(audios[ind]?.audio))
        dispatch(setIsPlaying(!isPlaying))
        dispatch(setAudioId(ind + 1))

    };

    return(
        <div>

            <div className="flex  items-center justify-center mt-5">
                <button onClick={PlayPause}>
                    {(isPlaying && audioId === (ind + 1)) ? (
                        <i className="ri-pause-mini-fill ri-3x text-primary"></i>
                    ) : (
                        <i className="ri-play-mini-fill ri-3x text-primary"></i>
                    )}
                </button>
            </div>
        </div>
    )
}

export default AudioPlayer