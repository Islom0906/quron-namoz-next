interface SurahProps{
    surah:{
        number:number
        numberOfAyahs:number
        name:string
        englishName:string
        englishNameTranslation:string
        revelationType:string
    }
}



const SurahCard = ({surah}:SurahProps) => {
    return(
        <>
            <div className="p-5 bg-white rounded-xl w-full flex items-start flex-col space-y-7 cursor-pointer group hover:bg-primary hover:shadow-2xl duration-300"
                 >
                <div className="flex items-center justify-between w-full">
              <span className="px-3 py-1 text-spanColor rounded-full bg-spanBg">
                {surah.number}
              </span>
                    <span className="px-3 py-1 text-spanColor rounded-full bg-spanBg">
              Ayahs: {surah.numberOfAyahs}
              </span>
                </div>
                <div className="context flex flex-col items-start space-y-2">
                    <p className="font-bold text-xl group-hover:text-white">{surah.name}</p>
                    <p className="font-bold text-xl group-hover:text-white opacity-50">{surah.englishName}</p>
                    <p className="font-bold text-xl group-hover:text-white opacity-50">
                        {surah.englishNameTranslation}
                    </p>
                </div>
            </div>
        </>
    )
}

export default SurahCard