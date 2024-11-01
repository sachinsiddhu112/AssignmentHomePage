import React from 'react'
import heroCardsData from '../../assets/heroCardsData.js'
export default function HeroCard() {
    
    return (
        <div className='flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-4 w-full md:w-[700px] lg:w-full max-w-[1000px] h-full items-center'>
            {heroCardsData.map((item,ind) => (
                <div key={ind} className=' flex flex-col gap-2 items-center w-[300px] h-[260px] bg-[#141421] m-auto rounded-[10px]'>
                    <img src={item.image} alt="" />
                    <div className='flex gap-3 w-fit h-fit  justify-center '>
                        <img className="w-[15px] h-[15px] mt-1" src={item.icon} alt="" />
                        <span className='w-[240px]'>{item.desc}</span>
                    </div>

                </div>
            ))
            }
        </div>
    )
}
