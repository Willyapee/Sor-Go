import React from 'react'
import { Link } from 'react-router-dom'

export default function Why(){
    return (
        <>  
            <div className="h-screen relative flex flex-col items-center">
                <div className='flex flex-col items-center justify-center mt-15'>
                    <p className=" underline bg-yellow-300 font-bold text-3xl">why us?</p>
                    <img className="w-[120px] h-auto" src="./Logo.png" alt="Gambar" />
                </div>
                <Link to="/">
                    <div className='absolute top-15 right-10 homeBut flex flex-col items-center'>
                        <img src="./Home.png" className="homePic w-15 sm:w-20 md:w-22.5 lg:w-25 h-auto" alt="Home"/>
                        <p className='homeText underline text-white font-bold text-base sm:text-base md:text-xl lg:text-2xl mt-2'>Home</p>
                    </div>
                </Link>

                <img className="w-[250px] sm:w-[325px] md:w-[350px] lg:w-[375px] h-auto top-95 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" src="./Sorghum.png" alt="Gambar" />
                <img className="grow w-[250px] sm:w-[325px] md:w-[350px] lg:w-[375px] h-auto top-95 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 z-1" src="./SorghumGlow.png" alt="Gambar" />
                
                <div className='h-[350px] grid grid-cols-3 gap-8 sm:gap-25 md:gap-25 lg:gap-30 items-center mt-10 sm:mt-10.5 md:mt-10.5 mx-auto'>
                    <div className='flex flex-col space-y-20'>
                        <div className='ml-4 sm:ml-6 md:ml-8 lg:ml-10 text-center'>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>High in fiber</p>
                        </div> 
                        <div className='mr-9 sm:mr-11 md:mr-13 lg:mr-15  text-center  '>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>Antioxidant<br></br>properties</p>
                        </div>
                        <div className='ml-4 sm:ml-6 md:ml-8 lg:ml-10 text-center'>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>Less sugar</p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col items-center justify-center z-10'>
                        <span className='inline-block underline italic bg-yellow-300 font-bold text-2xl md:text-2xl lg:text-3xl'>
                            sorghum
                        </span>
                        <span className='inline-block underline italic bg-yellow-300 font-bold text-2xl md:text-2xl lg:text-3xl ml-1'>
                            based
                        </span>
                    </div>

                    
                    <div className='flex flex-col space-y-20'>
                        <div className='mr-4 sm:mr-6 md:mr-8 lg:mr-10 text-center'>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>Good source of<br></br>protein</p>
                        </div>
                        <div className='ml-9 sm:ml-11 md:ml-13 lg:ml-15 text-center'>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>Gluten-free rice</p>
                        </div>
                        <div className='mr-4 sm:mr-6 md:mr-8 lg:mr-10 text-center'>
                            <p className='underline text-white font-bold text-sm md:text-xl lg:text-2xl'>Carbohydrate<br></br>alternatives</p>
                        </div>
                    </div>
                </div>  

                <p className=' text-white font-bold text-1xl mt-17 z-10'>Sorghum on the go!</p>
            </div>
        </>
    )
}
