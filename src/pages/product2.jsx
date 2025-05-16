import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Product2() {
    return (
        <>  
           <div className="relative flex flex-col items-center">
                <div className='flex flex-col items-center justify-center mt-15'>
                    <p className=" underline bg-yellow-300 font-bold text-3xl">our products</p>
                    <img className="w-[120px] h-auto" src="./Logo.png" alt="Gambar" />
                </div>
                <Link to="/">
                    <div className='absolute top-15 right-10 homeBut flex flex-col items-center'>
                        <img src="./Home.png" className="homePic w-15 sm:w-20 md:w-22.5 lg:w-25 h-auto" alt="Home"/>
                        <p className='homeText underline text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>Home</p>
                    </div>
                </Link>
            </div >
            <div className='relative h-[480px] w-full flex flex-col items-center justify-center mt-10'>
                <img className='h-auto w-[62.5%] sm:w-[60%]' src="./Prod3.png" alt="" />
                <div className='flex items-center justify-center mt-16 lg:mt-13 gap-10 '>
                    <img className='w-[15%] lg:w-[12%] h-auto' src="ProdIng5.png" alt="" />
                    <img className='w-[15%] lg:w-[12%] h-auto' src="ProdIngMain.png" alt="" />
                </div>
                <p className=' text-white font-bold sm:text-base lg:text-1xl mt-14 lg:mt-10 z-10'>per-serving 125 kcal</p>
            </div>
            <Link to="/product1">
                <img src="./arrowL.png" className="arrL absolute w-[15%] h-auto top-1/2 left-0 transform -translate-y-1/2 z-10" alt="Gambar"/>
            </Link>
            <Link to="/product">
                <img src="./arrowR.png" className="arrR absolute w-[15%] h-auto top-1/2 right-0 transform -translate-y-1/2 z-10" alt="Gambar"/>
            </Link>
        </>
    );
}
