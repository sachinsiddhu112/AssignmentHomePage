import React from 'react'

export default function HeroText() {
    return (
        <div className='flex flex-col w-full h-fit items-center justify-center py-10 z-10 opacity-100'>
           
            <div className='w-[500px] flex flex-col gap-5 py-10 justify-center items-center '>
                <span className='text-[50px] w-fit font-[800] text-[#AAD0FF] '>SyncHomie</span>
                <div className='flex flex-col justify-center w-full'>
                    <span className=' block text-[30px] font-[700] w-fit'>
                        Keep track of all your media,and
                    </span>
                    <span className='block text-[30px] font-[700] w-fit m-auto'>
                        make friends while doing it.
                    </span>
                </div>
                <button className='w-[250px] h-[58px] rounded-[10px] bg-gradient-to-r from-blue-400 to-blue-800 shadow-md shadow-blue-400 '>Register Now</button>
                <div className='flex flex-col justify-center items-center'>
                <span className=' w-fit font-[500] text-[24px]'>
                    Track "TV Shows, Animes, K-Dramas 
                </span>
                <span className=' w-fit font-[500] text-[24px]'>& Movies"</span>
                </div>
            </div>
        </div>
    )
}
