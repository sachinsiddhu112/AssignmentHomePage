import React from 'react'
import ContentCard from './ContentCard.jsx'
export default function Movies() {
  return (
    <div className=' flex flex-col gap-3 w-full max-w-[1300px] h-full px-5'>
      <div className='flex gap-3 items-end pl-2 '>

        <span className='font-[900] text-[46px] text-red-400 opacity-30'>132,784</span>
        <span className='font-[700] text-[30px] mb-[4px] text-blue-600'>Movies</span>
      </div>
      <div className='flex gap-4 items-center w-fit h-fit mb-10 pl-4'>
        <span className='w-[4px] h-[30px] bg-blue-500'></span>
        <span className='text-[24px] font-[600]  '>Most watched movies this month</span>
      </div>
      <ContentCard />
    </div>
  )
}
