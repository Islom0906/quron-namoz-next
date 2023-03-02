import Image from "next/image";

const Home = ():JSX.Element => {
    return (
        <div className='w-full h-screen flex-col  flex items-center justify-center sm:space-y-0 space-y-10'>
            <Image src={'/ilustrator.svg'}
                   layout="fill"
                   sizes=" 100vw"

            />
        </div>
    )
}

export default Home