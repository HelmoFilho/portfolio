'use client'

import { useLocale, useTranslations } from 'next-intl';
import Typewriter from 'typewriter-effect';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Home = () => {

    const locale = useLocale()

    const t = useTranslations('Main.Home');

    let professions = locale === "en" ?
        ["Software Developer", "Back-End Developer", "Freelancer"] :
        ["Desenvolvedor de Software", "Programador Back-End", "Freelancer"]

    return (
        <section className={`px-8 md:px-16 lg:px-24 lg:gap-x-16 flex items-center flex-col lg:flex-row gap-y-6 lg:mb-28 
            mt-40 md:mt-56 lg:mt-52`} id="home">
            <div className="bg-green-500 h-auto w-[45vw] md:w-[30vw] lg:w-[100vw] flex items-center justify-center rounded-[90%]">
                <img src="./images/hero/hero-removedbg.png" alt="hero-image"
                    className='relative h-auto w-[45vw] md:w-[30vw] rounded-[90%] shadow-[0px_0px_20px] shadow-green-700' />
            </div>
            <div className="pt-8 lg:">
                <h1 className="text-3xl md:text-5xl font-bold">{t("introduction")}<span className='text-green-600'>Helmo</span></h1>
                <div className="w-full pt-1 md:pt-4">
                    <h3 className="text-4xl font-bold h-24 md:h-10"><span className='inline text-green-600'>
                        <Typewriter options={{
                            strings: professions,
                            autoStart: true,
                            loop: true,
                            //pauseFor: 3000,
                            delay: 50,
                            deleteSpeed: 'natural',
                            cursor: "_"
                        }}
                        /></span>
                    </h3>
                </div>
                <p className='text-justify font-medium relative text-base md:text-2xl pt-6 md:pt-4'>
                    {t("summary")}
                </p>
                <div className="flex flex-row items-center justify-evenly lg:justify-start lg:gap-x-6 pt-6 md:pt-8">
                    <a href="https://www.linkedin.com/in/helmo-filho-02370b141/" target="_blank" className={`
                    border-4 border-green-700 size-16 rounded-full flex items-center justify-center group 
                    hover:bg-green-800 hover:shadow-[0px_0px_20px] hover:shadow-green-800 hoverscale-125
                    hover:active:bg-green-600 hover:active:shadow-[0px_0px_20px] hover:active:shadow-green-500 hover:active:scale-125 
                    hover:active:border-green-500 
                `}>
                        <FaLinkedin className='size-8 text-green-700 group-hover:text-white group-active:group-hover:text-white' />
                    </a>
                    <a href="https://github.com/HelmoFilho" target="_blank" className={`
                    border-4 border-green-700 size-16 rounded-full flex items-center justify-center group 
                    hover:bg-green-800 hover:shadow-[0px_0px_20px] hover:shadow-green-800 hoverscale-125
                    hover:active:bg-green-600 hover:active:shadow-[0px_0px_20px] hover:active:shadow-green-500 hover:active:scale-125 
                    hover:active:border-green-500 
                `}>
                        <FaGithub className='size-8 text-green-700 group-hover:text-white group-active:group-hover:text-white' />
                    </a>
                    <a href="mailto:helmofilho09@gmail.com" className={`
                    border-4 border-green-700 size-16 rounded-full flex items-center justify-center group 
                    hover:bg-green-800 hover:shadow-[0px_0px_20px] hover:shadow-green-800 hoverscale-125
                    hover:active:bg-green-600 hover:active:shadow-[0px_0px_20px] hover:active:shadow-green-500 hover:active:scale-125 
                    hover:active:border-green-500 
                `}>
                        <SiGmail className='size-8 text-green-700 group-hover:text-white group-active:group-hover:text-white' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home
