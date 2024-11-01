import React from 'react'
import avatar from "../../assets/avatar.png"

export default function TrendingCommCard() {
  return (
    <div className='flex flex-col gap-5  w-[350px] h-fit 
    p-3 bg-[#1B1722] rounded-[10px] shadow-commShadow'>
      <span className='text-[16px] font-[400]'>Funny episode, kinda makes you rethink a lot. Like what if we’re all connected to one super mega-conciousness?
      </span>
      <div className=''>
        <div  className='flex  gap-3 items-center'>
        <img className='w-8 h-8' src = { avatar } alt="avtar" />
        <span className='text-purple-600'>S15E10</span>
        </div>
        <div className='font-[300] text-[16px] mt-3'>
            It's always sunny in Philadelphia
          </div>
      </div>
      
    </div>
  )
}
