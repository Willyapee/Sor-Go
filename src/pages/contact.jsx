import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <>
            <div className="min-h-screen md:h-screen relative flex flex-col items-center">
                <div className='flex flex-col items-center justify-center mt-15'>
                    <p className=" underline bg-yellow-300 font-bold text-3xl">Contact Us</p>
                    <img className="w-[120px] h-auto" src="./Logo.png" alt="Gambar" />
                </div>
                <Link to="/">
                    <div className='absolute top-15 right-10 homeBut flex flex-col items-center'>
                        <img src="./Home.png" className="homePic w-15 sm:w-20 md:w-22.5 lg:w-25 h-auto" alt="Home"/>
                        <p className='homeText underline text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>Home</p>
                    </div>
                </Link>

                <div className='flex flex-col md:flex-row lg:flex-row -mt-10 mx-auto w-full justify-center'>
                    <div className='flex justify-center md:justify-end'>
                        <img className=" -mt-15 md:-mt-10 lg:-mt-30 mr-15 w-95 sm:w-95 md:w-70 lg:w-103 h-auto" src="./conTestimonial.png" alt="Gambar" />
                    </div>

                    <div className='flex flex-col items-center md:items-start -mt-10 md:mt-0'>
                        <div className='-mr-5'>
                            <div className='md:mt-30 lg:mt-20'>
                                <p className="inline-block bg-yellow-300 font-bold text-xl md:text-2xl lg:text-3xl">Check it out for more!</p>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-6 sm:w-6 md:w-8 lg:w-10 h-auto' src="./conSCIG.png" alt="Gambar" />
                                <a href="https://instagram.com/sorgo.id" target="_blank" rel="noopener noreferrer">
                                    <p className='ml-10 homeText text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>
                                        sorgo.id
                                    </p>
                                </a>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-6 sm:w-6 md:w-8 lg:w-10 h-auto' src="./conSCGMAIL.png" alt="Gambar" />
                                <a href="mailto:sorgo@gmail.com">
                                    <p className='ml-10 homeText text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>
                                        sorgo@gmail.com
                                    </p>
                                </a>
                            </div>
                            <div className='flex items-center mt-5'>
                                <img className='w-6 sm:w-6 md:w-8 lg:w-10 h-auto' src="./conSCWA.png" alt="Gambar" />
                                <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer">
                                    <p className='ml-10 homeText text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>
                                        +62 123 4567 8910
                                    </p>
                                </a>
                            </div>
                        </div>
                        <img className='w-[425px] md:w-[450px] lg:w-[550px] mt-10 md:-mt-2 lg:-mt-3 h-auto' src="conThankyou.png" alt="Gambar" />
                    </div>
                </div>
            </div>
        </>
    );
}