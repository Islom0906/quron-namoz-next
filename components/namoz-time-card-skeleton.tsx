import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

interface Skeleton{
    cards:number
}
const NamozTimeCardSkeleton = ({cards}:Skeleton) => {

    console.log(cards)
    return (
        Array(cards).fill(0).map((_,ind)=>(
            <div key={ind} className={`bg-white  rounded-lg p-5 shadow-xl flex items-center justify-between`}>
                <Skeleton width={50} height={30} />
                <Skeleton width={65} height={30} />
            </div>

        ))
    )
}
export default NamozTimeCardSkeleton