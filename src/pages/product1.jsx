import React from 'react'
import { Link } from 'react-router-dom'

export default function Product1(){
    return (
        <>  
            <p className='underline bg-yellow-300 font-bold text-3xl absolute top-10 left-1/2 transform -translate-x-1/2 z-10'>How to serve :</p>
            <img className="absolute w-140 h-auto lg:top-39 lg:left-194 transform -translate-x-1/2 -translate-y-1/2" src="./NasGorLogo.png" alt="Gambar" />
            
            <div className="flex justify-center mt-60 ">
                <div className="grid grid-cols-3 gap-4 w-[700px]">
                    <div className="relative">
                        <div className="mb-20">
                            <p className='mb-10 inline underline bg-yellow-300 font-bold text-3xl'>1.</p>
                        </div>
                        <img src="./Step1.png" className="absolute w-25 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline  bg-yellow-300 font-bold text-1xl'>Cook the Sorghum rice with 500ml water. Leave it cook for 45 minutes.</p>
                    </div>
                    <div className="relative">
                        <div className="mb-20">
                            <p className='inline underline bg-yellow-300 font-bold text-3xl'>2.</p>
                        </div>
                        <img src="./Step2.png" className="absolute w-25 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline bg-yellow-300 font-bold text-1xl'>Put some oil into a hot pan. Make sure the oil cover the entire surface of the pan.</p>
                    </div>
                    <div className="relative">
                        <div className="mb-20">
                            <p className='inline underline bg-yellow-300 font-bold text-3xl'>3.</p>
                        </div>
                        <img src="./Step3.png" className="absolute w-25 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline bg-yellow-300 font-bold text-1xl'>Put the chopped garlic inside the hot pan.</p>
                    </div>
                    <div className="relative">
                        <div className='mb-20'>
                            <p className='inline underline bg-yellow-300 font-bold text-3xl'>4.</p>
                        </div>
                        <img src="./Step4.png" className="absolute w-35 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline bg-yellow-300 font-bold text-1xl'>Add the eggs and mix it really well.</p>
                    </div>
                    <div className="relative">
                        <div className="mb-20">
                            <p className='inline underline bg-yellow-300 font-bold text-3xl'>5.</p>
                        </div>
                        <img src="./Step5.png" className="absolute w-25 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline bg-yellow-300 font-bold text-1xl'>Add your own choice of toppings to your liking.</p>
                    </div>
                    <div className="relative">
                        <div className="mb-20">
                            <p className='inline underline bg-yellow-300 font-bold text-3xl'>6.</p>
                        </div>
                        <img src="./Step6.png" className="absolute w-35 h-auto top-0 left-1/2 transform -translate-x-1/2" alt="Gambar"/>
                        <p className='inline bg-yellow-300 font-bold text-1xl'>Ready to serve!</p>
                    </div>
                </div>
            </div>

            <p className='underline text-white font-bold text-1xl absolute top-157 left-1/2 transform -translate-x-1/2 z-10'>Avoid moisture to last up to 3 months</p>
            <Link to="/product">
                <img src="./arrowL.png" className="arrL absolute w-40 h-auto lg:top-100 lg:left-50 transform -translate-y-1/2 z-10" alt="Gambar"/>
            </Link>
            <Link to="/product">
                <img src="./arrowR.png" className="arrR absolute w-40 h-auto lg:top-100 lg:right-50 transform -translate-y-1/2 z-10" alt="Gambar"/>
            </Link>
            <Link to="/">
                <div className='homeBut absolute right-10 top-140 flex flex-col items-center'>
                    <img src="./Home.png" className="homePic w-25 h-auto" alt="Gambar"/>
                    <p className='homeText underline text-white font-bold text-1xl mt-2'>Home</p>
                </div>
            </Link>
        </>
    )
}
