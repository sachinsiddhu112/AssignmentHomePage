import React from 'react'
import ContentCard from './ContentCard.jsx'
export default function Drama() {
  return (
    <div className=' flex flex-col gap-3 w-full h-full px-5 mt-[90px]'>
      <div className='flex gap-3 items-end '>
        <span className='font-[900] text-[46px] text-green-600 opacity-30 pl-2'>132,784</span>
        <span className='font-[700] text-[30px] mb-[4px] text-blue-600'>Drama</span>
      </div>
      <div className='flex gap-4 items-center w-fit h-fit mb-10 pl-4'>
      <span className='w-[4px] h-[30px] bg-blue-500'></span>
      <span className='text-[24px] font-[600] '>Most watched Dramas this month</span>
      </div>
      <ContentCard/>
    </div>
  )
}
