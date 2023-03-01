import '@/styles/globals.css'
import '@/styles/author-audio.css'
import type {AppProps} from 'next/app'
import 'remixicon/fonts/remixicon.css'
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import {Provider} from 'react-redux';
import store from "@/store";
import AudioPlayerHome from "@/components/audio-player-home";
import {useState} from "react";


export default function App({Component, pageProps}: AppProps) {



    return (

        <Provider store={store}>
            <div className={'bg-bg w-full min-h-screen'}>
                <Navbar/>
                <Sidebar/>

                    <AudioPlayerHome  />


                <div className={'pt-[104px] sm:pl-[104px] pl-10 sm:pb-10 pb-20 pr-10'}>
                    <Component {...pageProps} />

                </div>
            </div>
        </Provider>

    )
}