import React, {useState, useEffect, useRef, ChangeEvent, SetStateAction, Dispatch} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hook";
import {seletedAudio, setAudioId, setIsPlaying} from "@/slice/surahDetail";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

interface audioTimeI {
    length: number
    progress: number
}

interface AudioPlayerHomeI {
    setIsAudio: Dispatch<SetStateAction<boolean>>
}

const AudioPlayerHome = () => {
    const [audioTime, setAudioTime] = useState<audioTimeI>({
        length: 0,
        progress: 0
    });
    const [isAudio, setIsAudio] = useState<boolean>(true)

    const {isPlaying, surahDetail, audioId, audio} = useAppSelector(state => state.surahDetail)
    const dispatch = useAppDispatch()
    const audioElem = useRef<HTMLAudioElement>(null);
    const clickRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (audio !== "") {
            setIsAudio(true)
        } else {
            setIsAudio(false)
        }
        if (audioElem.current) {
            const audioPromise = audioElem.current?.play();
            if (audioPromise !== undefined) {
                audioPromise.catch((error) =>
                    console.error( '>>',error)
                )
            }
        }

    }, [audio])
    const PlayPause = () => {

        dispatch(setIsPlaying(!isPlaying))
    };


    const onPlaying = () => {
        if (audioElem.current) {
            const duration = audioElem.current.duration;
            const ct = audioElem.current.currentTime;
            setAudioTime((prewState) => ({...prewState, progress: (ct / duration) * 100, length: duration,}));
            if (audioElem.current.ended) {
                setAudioTime((prewState) => ({...prewState, progress: 0}));
                if (surahDetail.length - 1 >= audioId) {
                    dispatch(seletedAudio(surahDetail[audioId]?.audio))
                } else {
                    dispatch(setIsPlaying(false))
                    dispatch(seletedAudio(''))
                }
                if (surahDetail.length > audioId) {
                    dispatch(setAudioId(audioId + 1))
                }
            }

        }

    };
    const checkWidth = (e: React.MouseEvent<HTMLDivElement>) => {
        if (clickRef.current) {
            const width: number = clickRef.current.clientWidth;
            const offset: number = e.nativeEvent.offsetX;
            const divProgress: number = (offset / width) * 100;
            if (audioElem.current) {
                audioElem.current.currentTime = (divProgress / 100) * audioTime.length;
            }
        }
    };

    const closeAudio = () => {
        setIsAudio(false)
        dispatch(setIsPlaying(false))
        dispatch(seletedAudio(''))

    }

    useEffect(() => {
        if (audioElem.current) {
            if (isPlaying) {
                const audioPromise = audioElem.current.play();
                if (audioPromise !== undefined) {
                    audioPromise.catch((error) =>
                        console.error(error)
                    )
                }
            } else {
                audioElem.current?.pause();
            }

        }
    }, [isPlaying]);


    return (
        <>

            <audio src={audio} ref={audioElem} onTimeUpdate={onPlaying}></audio>
            {
                isAudio ?

                    <div className="fixed sm:pl-20 pl-4 top-16 w-full z-10 bg-primary h-14 pr-4 ">
                        <div className="flex items-center py-2 space-x-2 ">
                            <div className="flex  items-center mt-2">
                                <button onClick={PlayPause}>
                                    {isPlaying ? (
                                        <i className="ri-pause-mini-fill ri-xl text-white"></i>
                                    ) : (
                                        <i className="ri-play-mini-fill ri-xl text-white"></i>
                                    )}
                                </button>
                            </div>
                            <div
                                className="w-full bg-bg h-2 rounded-full"
                                onClick={checkWidth}
                                ref={clickRef}
                            >
                                <div
                                    className="w-0 h-full bg-icon  rounded-full "
                                    style={{width: `${audioTime.progress}%`}}
                                ></div>
                            </div>
                            <i className="ri-close-line ri-xl text-white cursor-pointer" onClick={closeAudio}></i>
                        </div>
                    </div> : ""
            }
        </>
    )
}

export default AudioPlayerHome