import React from 'react'

import Movies from './Movies'
import TVShows from './TvShows'
import Anime from './Anime'
import Drama from './Drama'
export default function Content() {
  return (
    <div className='flex flex-col items-center justify-center bg-background w-full h-full text-white'>
        
     <Movies/>
     <TVShows/>
     <Anime/>
     <Drama/>
     <div className='text-[32px] font-[500] mt-[90px] pb-10'>Start Tracking What You Watch</div>
     <button className='w-[250px] h-[58px] rounded-[10px] bg-[#115FA0] mt-[10px]'>Register Now</button>
    </div>
  )
}
