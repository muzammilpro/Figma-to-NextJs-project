import React from 'react'
import Image from 'next/image'
import Img from '../../../../public/CardImg.svg'

export default function PricingCard() {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <center>
                <div className="font-bold text-xl mb-2 ">Basic Plan</div>
                <Image className=" h-40 w-90 mx-auto" src={Img} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className='flex  md:items-center'>
                        <h1 className='text-blue-600 dark:text-blue-500 mb-4 font-extrabold text-4xl'>$50</h1><p>/Month</p>
                    </div>
                    <p className="text-gray-700 text-base">
                        Graphic Design <br /> Web Design <br /> UI/UX <br /> HTML/CSS <br /> SEO Marketing <br /> Bussiness Analysis

                    </p>
                    <button className="text-white rounded-3xl bg-[#5299eb] px-5 py-2">Start Now</button>
                </div>
            </center>

        </div>
    )
}
