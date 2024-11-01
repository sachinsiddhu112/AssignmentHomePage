import React from 'react'

import Movies from './Movies'
import TVShows from './TVShows'
import Anime from './Anime'
import Drama from './Drama'
export default function Content() {
  const moviesStatus = 'notAdded';
  return (
    <div className='flex flex-col items-center justify-center bg-background w-full max-w-[1300px] overflow-visible h-full text-white mx-auto'>
      <div className='text-[32px] ml-10 lg:m-0 font-[700] w-full'>Explore the media database on the internet.</div>
      <Movies itemStatus={moviesStatus} />
      <TVShows itemStatus={moviesStatus} />
      <Anime itemStatus={moviesStatus} />
      <Drama itemStatus={moviesStatus} />
      <div className='text-[32px] font-[500]   py-10'>Start Tracking What You Watch</div>
      <button className='w-[250px] h-[58px] rounded-[10px] bg-gradient-to-r from-[purple] to-purple-400 shadow-md shadow-purple-500 hover:bg-green-900'>Register Now</button>
    </div>
  )
}
