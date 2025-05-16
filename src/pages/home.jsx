import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>        
            <div className='relative flex flex-col items-center justify-center h-screen'>
                <div className='mx-auto w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px]'>
                    <div className='flex gap-9 mb-50'>
                        <Link to="/about" className='underline bg-yellow-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl'>about</Link>
                        <Link to="/why" className='underline bg-yellow-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl'>why us?</Link>
                    </div>

                    <img className=" w-[300px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" src="./Logo.png" alt="Gambar" />
                    <img className="in w-[450px] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10" src="./LogoGlow.png" alt="Gambar" />
                    
                    <div className='flex justify-end gap-9'>
                        <Link to="/product" className='underline bg-yellow-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl'>our product</Link>
                        <Link to="/contact" className='underline bg-yellow-300 font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl'>contact us</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
