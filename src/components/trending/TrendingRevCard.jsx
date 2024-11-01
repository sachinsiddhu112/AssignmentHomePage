import React from 'react'
import avatar from "../../assets/avatar.png"
import warningcircle from "../../assets/warningcircle.png";
import thumbsup from "../../assets/thumbsup.png";
import thumbsdown from "../../assets/thumbsdown.png";
export default function TrendingRevCard() {
  return (
    <div className='w-fit h-fit p-[2px] bg-slate-500 rounded-[10px] bg-gradient-to-r from-[#E318F554] to-[#755EFF54]'>
      <div className='flex flex-col  w-[320px] md:w-[220px] h-fit p-3 rounded-[10px] 
    gap-10 bg-[#141421] '>
        <div className='flex gap-5'>
          <div>
            <img src={avatar} alt="" />
          </div>
          <div className='flex flex-col gap-1 '>
            <span className='font-[400] text-[16px]'>Reviewer Name</span>
            <span className='font-[200] text-[14px]'>Loream Ipsum</span>
            <span className='font-[200] text-[14px]'>Loream Ipsum</span>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-2'>
            <img src={warningcircle} alt="" />
            <img src={thumbsup} alt="" />
            <img src={thumbsdown} alt="" />
          </div>
          <div className='font-[360] text-[13px]'>
            It's always sunny in Philadelphia
          </div>
        </div>
      </div>
    </div>
  )
}
