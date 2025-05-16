import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return (
        <>        
            <div className="relative flex flex-col items-center">
                <div className='flex flex-col items-center justify-center mt-15'>
                    <p className=" underline bg-yellow-300 font-bold text-3xl">about</p>
                    <img className="w-[120px] h-auto" src="./Logo.png" alt="Gambar" />
                </div>
                <Link to="/">
                    <div className='absolute top-15 right-10 homeBut flex flex-col items-center'>
                        <img src="./Home.png" className="homePic w-15 sm:w-20 md:w-22.5 lg:w-25 h-auto" alt="Home"/>
                        <p className='homeText underline text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>Home</p>
                    </div>
                </Link>

                <div className='relative w-[65%] sm:w-[65%] md:w-[70%] h-30 sm:h-28 md:h-33 lg:h-35 flex mt-24 sm:mt-17 md:mt-12 lg:mt-10'>
                    <div className='absolute -mt-26.5 -ml-10 sm:-ml-15 md:-ml-17 lg:-ml-20 rounded-full flex items-center justify-center z-1'>
                        <div className='relative mt-10'>
                            <div className="mt-2 sm:mt-2 md:mt-0 lg:-mt-2 absolute -rotate-25 flex flex-col items-center">
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">CEO</p>
                            </div>
                            <img className="growDelayed -mt-13 sm:-mt-17 md:-mt-20 lg:-mt-25 -ml-13 sm:-ml-16 md:-ml-16 lg:-ml-20 absolute w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto" src="./abCEOGlow.png" alt="Gambar" />
                            <img className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto" src="./abCEO.png" alt="Gambar" />
                        </div>
                        <div className='mt-18 sm:mt-14 md:mt-9 lg:mt-4 bg-white w-28 h-6 sm:w-28 sm:h-7 md:w-36 md:h-9 lg:w-40 lg:h-10 rounded-full flex items-center justify-center'>
                            <p className='text-sm md:text-sm lg:text-base member font-extrabold'>Audrey Aurantica</p>
                        </div>
                    </div>
                    <img className="grow -mt-13 sm:-mt-17 md:-mt-20 lg:-mt-25 -mr-20 right-0 absolute w-[100px] sm:w-[120px] md:w-[130px] lg:w-[180px] h-auto" src="./abCEOGlow1.png" alt="Gambar" />
                    <div className='flex justify-center w-full bg-[#142ba3] rounded-4xl'>
                        <div className='mission flex flex-col justify-center '>
                            <p className="font-bold text-[2.5vw] sm:text-[2.3vw] md:text-[2.5vw] lg:text-[2vw] mx-5 lg:mx-8 z-2">
                                <span className="bg-yellow-300">Sor-Go is not just a company that sells protein bar.</span>
                            </p>
                            <p className="font-bold text-[2.5vw] sm:text-[2.3vw] md:text-[2.5vw] lg:text-[2vw] mx-5 lg:mx-8">
                                <span className="bg-yellow-300">
                                    Sor-Go is here with <span className="italic underline">missions to be solve for a better us.</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center gap-8 sm:gap-20 md:gap-35 lg:gap-40 mt-12 sm:mt-19 md:mt-16 lg:mt-10 ">
                    <div className='relative flex flex-col items-center lg:w-[220px] '>
                        <div className='relative mt-10'>
                            <div className="-mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 absolute -rotate-25 flex flex-col items-center">
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">COO</p>
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">CTO</p>
                            </div>
                            <img className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto" src="./abCOO.png" alt="Gambar" />
                        </div>
                        <div className='mt-4 bg-white w-28 h-6 sm:w-28 sm:h-7 md:w-36 md:h-9 lg:w-40 lg:h-10 rounded-full flex items-center justify-center'>
                            <p className='text-sm md:text-sm lg:text-base member font-extrabold'>William Asabha</p>
                        </div>
                        
                    </div>
                    <div className='relative flex flex-col items-center lg:w-[220px] '>
                    <div className='relative mt-10'>
                            <div className="-mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 absolute -rotate-25 flex flex-col items-center">
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">CMO</p>
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">CPO</p>
                            </div>
                            <img className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto" src="./abCMO.png" alt="Gambar" />
                        </div>
                        <div className='mt-4 bg-white w-28 h-6 sm:w-28 sm:h-7 md:w-36 md:h-9 lg:w-40 lg:h-10 rounded-full flex items-center justify-center'>
                            <p className='text-sm md:text-sm lg:text-base member font-extrabold'>Kelvin</p>
                        </div>
                    </div>
                    <div className='relative flex flex-col items-center lg:w-[220px] '>
                        <div className='relative mt-10'>
                            <div className="mt-2 sm:mt-2 md:mt-0 lg:-mt-2 absolute -rotate-25 flex flex-colitems-center">
                                <p className=" underline bg-yellow-300 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl">CFO</p>
                            </div>
                            <img className="w-[110px] sm:w-[120px] md:w-[130px] lg:w-[150px] h-auto" src="./abCFO.png" alt="Gambar" />
                        </div>
                        <div className='mt-4 bg-white w-28 h-6 sm:w-28 sm:h-7 md:w-36 md:h-9 lg:w-40 lg:h-10 rounded-full flex items-center justify-center'>
                            <p className='text-sm md:text-sm  lg:text-base member font-extrabold text'>Peter Huang</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-15 flex flex-col mb-20'>
                <div className='ml-5 flex'>
                    <img className='sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto' src="./abFull1.png" alt="Gambar" />
                </div>
                <div className="mr-5 mt-2 flex justify-end ">
                    <img className='sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto' src="./abFull2.png" alt="Gambar" />
                </div>
                <div className='ml-5 mt-2 flex'>
                    <img className='sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto' src="./abFull3.png" alt="Gambar" />
                </div>
            </div>
        </>
    )
}