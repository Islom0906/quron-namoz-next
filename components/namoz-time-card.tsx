interface NamozTimeCardI {
    item: {
        isActive: boolean
        time: string
        timeName: string
        timeNameUz:string
    }
}

const NamozTimeCard = ({item}: NamozTimeCardI) => {
    return (
        <div
            className={`${item.isActive ? 'bg-primary' : 'bg-white'}  rounded-lg p-5 shadow-xl flex items-center justify-between`}>
            <span className={`font-bold text-xl  ${item.isActive ? 'text-white' : 'text-black'}`}>{item.time}</span>
            <p className={`font-bold text-xl ${item.isActive ? 'text-white' : 'text-black'} opacity-50`}>{item.timeNameUz}</p>
        </div>
    )
}

export default NamozTimeCard