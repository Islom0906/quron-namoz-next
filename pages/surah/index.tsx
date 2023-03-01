import SurahCard from "@/components/Surah-card";
import SurahLib from "@/lib/surah";
import {SurahI, SurahRes} from "@/interfaces";
import Link from "next/link";
import {getSurahFailure, getSurahStart, getSurahSuccess} from "@/slice/surah";
import {useAppDispatch, useAppSelector} from "@/store/hook";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/store";

interface SurahsProps {
    surahs: SurahI[]
}

const Index = ({surahs}: SurahsProps) => {

    const {isLoading}=useAppSelector((state)=>state.surah)
    const dispatch=useAppDispatch()

    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3 ">
            {
                surahs.map(surah => (
                    <Link href={`/surah/${surah.number}`} key={surah.number}>
                        <a>
                            <SurahCard surah={surah}/>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default Index

export async function getStaticProps() {
    try {
        const data = await SurahLib.getSurah<SurahRes>()
        const data1:SurahI[]=data.data
        return {
            props: {
                surahs: data1
            }
        }

    } catch (error) {
        console.log(error);
    }
}