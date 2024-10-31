import React from 'react'
import TrendingRevCard from './TrendingRevCard'
import TrendingCommCard from './TrendingCommCard'
import netflixlogo from "../../assets/netflixlogo.png";
import hululogo from "../../assets/hululogo.png";
import hotstarlogo from "../../assets/hotstarlogo.png";
import hbologo from "../../assets/hbologo.png";
import grouplogo from "../../assets/grouplogo.png";
export default function Trending() {
  return (
    <div className=' flex flex-col w-full h-full p-10 gap-[50px] items-center justify-center'>
      
      <span className='font-[400] text-[28px] w-full'>Trending Reviews</span>
      <div className='w-full h-fit flex flex-row gap-5'>
      <TrendingRevCard/>
      <TrendingRevCard/>
      <TrendingRevCard/>
      <TrendingRevCard/>
      <TrendingRevCard/>

      </div>
      <span className='font-[400] text-[28px] w-full'>Trending Comments</span>
      <div  className='w-full h-fit flex flex-row gap-5'>
     <TrendingCommCard/>
     <TrendingCommCard/>
     <TrendingCommCard/>
      </div>
      <div className='flex gap-5 items-center justify-center'>
        <span className='font-[700] text-[24px]'>Register to select your Streaming Services </span>
        <div className='flex gap-1 '>
          <img src = { netflixlogo } alt="Netflix" />
          <img src = { hbologo } alt="HBO" />
          <img src = { hotstarlogo } alt="Disney+" />
          <img src = { hululogo } alt="HULU" />
          <img src = { grouplogo } alt="Group" />
        </div>
        
      </div>
      <button className='w-[250px] h-[58px] rounded-[10px] bg-gradient-to-r from-[purple] to-[#755EFF54] shadow-md shadow-purple-500 '>Register Now</button>
    </div>
  )
}
