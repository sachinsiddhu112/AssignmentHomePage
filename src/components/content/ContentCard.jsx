import React from 'react'
import data from "../../assets/data";
import warningcircle from "../../assets/warningcircle.png"
import ratingicon from "../../assets/ratingicon.png";
import playicon from '../../assets/playicon.png';
export default function contentCard() {
  return (
    <div className='flex  gap-3 w-full h-fit'>
      {
        data.map((item) => (
            <div className='flex flex-col gap-5 w-[200px] h-[570px] pb-3  bg-[#1B1B1B] rounded-[10px]'>
                <img className='w-[190px] h-[300px]' src = {item.image} alt="poster" />
              <div className='flex justify-between  px-2'>
                  <span className='font-[400] text-lg'>{item.name}</span>
                  <img className='w-[25px] h-[25px]' src = {warningcircle} alt = "warning"/>
              </div>
              <span className='px-2'>{item.category}</span>
              <div className='flex gap-2 px-2'>
                <img src = {ratingicon} alt="rating" />
                <span>{item.rating}</span>
              </div>
             <div className='flex gap-2 bg-[#282828] w-fit h-fit px-2 py-1 rounded-[5px] m-auto '>
                <img src = {playicon} alt="play" />
                <button className='text-[#1C97FF] '>watch trailer</button>
             </div>
             <div className='flex gap-1 w-fit h-fit justify-center items-center m-auto'>
                <span className='mb-1'>watch on</span>
                <img className='w-[20px] h-[20px]' src = {item.platformIcon} alt="Netflix" />
             </div>
            </div>   
        ))
      }
    </div>
  )
}
