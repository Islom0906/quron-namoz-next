import {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hook";
import {TimesI, TimesRes} from "@/interfaces";
import NamozService from "@/lib/namoz";
import {getNamozFaliure, getNamozStart, getNamozSuccess} from "@/slice/namoz";
import timeIcon from '@/components/time-icon.json'
import moment from 'moment';
import 'moment/min/locales';
import NamozTimeCard from "@/components/namoz-time-card";
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'


moment.locale('uz')

interface timeI {
    time: string,
    isActive: boolean,
    timeName: string,
    timeNameUz: string
}
interface timeNamozI{
        isActive: boolean
        time: string
        timeName: string
        timeNameUz:string
}

const Namoz = () => {

    const [liveCheck, setLiveCheck] = useState<string>("")
    const [isLoading, setisLoading] = useState<boolean>(false)
    const [timeNamoz, setTimeNamoz] = useState<timeNamozI[]>([])
    const [prayerName, setPrayerName] = useState<string>("")
    const [liveClock, setLiveClock] = useState<string>('')
    const {times} = useAppSelector(state => state.namoz)
    const dispatch = useAppDispatch()
    const getNamoz = async () => {
        dispatch(getNamozStart())
        try {
            const data = await NamozService.getNamoz<TimesRes>()
            const times: TimesI = data.times
            dispatch(getNamozSuccess(times))

        } catch (error) {
            dispatch(getNamozFaliure())
            console.log(error);
        }
    }

    useMemo(() => {
        const newTimeArr: timeI[] = []
        timeIcon.forEach(time => {
            const timeName = time.timeName

            const timeHour:string = times[`${timeName}`]
            if (timeHour !== undefined) {
                time.time = timeHour
            }
            newTimeArr.push(time)
        })
        let collectionMinut:number[] = []
        for (let i = 0; i < newTimeArr.length; i++) {
            const prayerSplitHour:string[] = newTimeArr[i].time.split(':')
            const prayerMinutCalculation:number = Number(prayerSplitHour[0]) * 60 + Number(prayerSplitHour[1])
            collectionMinut.push(prayerMinutCalculation)
        }



        const hour = moment().format('LT')
        const splitHour:string[] = hour.split(':')
        const minutCalculation = Number(splitHour[0]) * 60 + Number(splitHour[1])

        for (let i = 0; i < newTimeArr.length; i++) {
            if (collectionMinut[i] <= minutCalculation && collectionMinut[i + 1] > minutCalculation) {
                newTimeArr[i].isActive = true
                setPrayerName(newTimeArr[i].timeNameUz)
            } else if (collectionMinut[5] <= minutCalculation || collectionMinut[0] > minutCalculation) {
                newTimeArr[5].isActive = true
                setPrayerName(newTimeArr[5].timeNameUz)

            } else {
                newTimeArr[i].isActive = false
            }

        }
        // set state
        setTimeNamoz(newTimeArr)
        setisLoading(false)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [times, liveCheck])


    useEffect(() => {
        getNamoz().then(()=>{
            console.log('success')
        })
        setInterval(() => {
            if (moment().format('ss') === '00') {
                setLiveCheck(moment().format('LT'))
            }
            setLiveClock(moment().format('LTS'))
        }, 1000);
        setisLoading(true)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="w-full h-full space-y-10">
            <div className='flex flex-col items-center space-y-10'>
                {
                    isLoading ? (<Skeleton width={200} height={40} />) :
                        (<h1 className="text-primary  text-3xl">{prayerName}</h1>)
                }
                <span className="text-black font-bold text-5xl">{liveClock}</span>
                <p className="text-primary  text-3xl">Tashkent</p>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    isLoading ?
                        Array(6).fill(0).map((_,ind)=>(
                            <div key={ind} className={`bg-white  rounded-lg p-5 shadow-xl flex items-center justify-between`}>
                                <Skeleton width={50} height={30} />
                                <Skeleton width={65} height={30} />
                            </div>

                        ))
                        :
                        timeNamoz.map((item, index) => (
                            <NamozTimeCard key={index} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default Namoz