import React from 'react'
import ContentCard from './ContentCard.jsx'
export default function TVShows() {
  return (
    <div className=' flex flex-col gap-3 w-full h-full px-5 mt-[90px]'>
      <div className='flex gap-3 items-end '>
        <span className='font-[900] text-[46px] text-red-400 opacity-30'>132,784</span>
        <span className='font-[700] text-[30px] mb-[4px] text-blue-600'>Tv Shows</span>
      </div>
      <span className='text-[24px] font-[600] mb-10'>Most watched TV shows this month</span>
      <ContentCard/>
    </div>
  )
}
