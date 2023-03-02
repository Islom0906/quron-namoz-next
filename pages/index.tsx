import Image from "next/image";
import Head from "next/head";

const Home = ():JSX.Element => {
    return (
        <>
            <Head>
                <title>Quron App</title>
                <meta name="description" content='Quron app for musilms'/>
            </Head>
        <div className='w-full h-screen flex-col  flex items-center justify-center sm:space-y-0 space-y-10'>
            <Image src={'/ilustrator.svg'}
                   layout="fill"
                   sizes=" 100vw"

            />
        </div>
        </>
    )
}

export default Home