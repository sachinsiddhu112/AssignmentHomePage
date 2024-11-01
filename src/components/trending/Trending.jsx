import React, { useRef, useState } from 'react'

import TrendingRevCard from './TrendingRevCard'
import TrendingCommCard from './TrendingCommCard'
import netflixlogo from "../../assets/netflixlogo.png";
import hululogo from "../../assets/hululogo.png";
import hotstarlogo from "../../assets/hotstarlogo.png";
import hbologo from "../../assets/hbologo.png";
import grouplogo from "../../assets/grouplogo.png";
import ArrowCircleLeft from "../../assets/ArrowCircleLeft.png";
import ArrowCircleRight from "../../assets/ArrowCircleRight.png";
import "./trending.css"
export default function Trending() {
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const selectSlider = useRef(null);
  const movement = useRef(null);
  // Mouse down event to start dragging
  const handleMouseDown = (e) => {
    console.log('mousedown')
    setIsDragging(true);
    setStartX(e.pageX - sliderRef1.current.offsetLeft);
    setScrollLeft(sliderRef1.current.scrollLeft);
  };

  // Mouse up event to stop dragging
  const handleMouseUp = () => {
    console.log('mouseup')
    setIsDragging(false);
  };

  // Mouse move event to handle the drag effect
  const handleMouseMove = (e) => {
    console.log('mousemove')
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef1.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed by changing the multiplier
    sliderRef1.current.scrollLeft = scrollLeft - walk;
  };
  const scrollLeftHandler = () => {
    if (selectSlider.current == 'reviews') {
      sliderRef1.current.scrollBy({
        left: -290,  // Adjust scroll amount
        behavior: 'smooth',
      });
    }
    else if (selectSlider.current == 'comments') {
      sliderRef2.current.scrollBy({
        left: -320,  // Adjust scroll amount
        behavior: 'smooth',
      });
    }
  };

  // Scroll slider to the right
  const scrollRightHandler = () => {
    if (selectSlider.current == 'reviews') {
      sliderRef1.current.scrollBy({
        left: +290,  // Adjust scroll amount
        behavior: 'smooth',
      });
    }
    else if (selectSlider.current == 'comments') {
      sliderRef2.current.scrollBy({
        left: +320,  // Adjust scroll amount
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className=' flex flex-col w-full max-w-[1350px] h-full p-4 gap-[20px] items-center justify-center m-auto  '>
      <div className='flex justify-between w-full max-w-[1300px] h-fit px-2 md:px-5'>
        <div className='flex gap-1 w-fit md:w-full  h-fit items-center'>
          <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
          <span className=' flex  font-[400] text-[24px] md:text-[28px] w-fit'>Trending Reviews</span>
        </div>
        <div className='flex gap-2 bg-[#A3A3A30D] ps-2 md:px-3 py-2 rounded-md'>
          <img src={ArrowCircleLeft}
            onClick={() => {
              selectSlider.current = 'reviews'
              scrollLeftHandler()
            }} className='w-[22px] h-[22px]  md:w-[30px] md:h-[30px] cursor-pointer' />
          <img src={ArrowCircleRight}
            onClick={() => {
              selectSlider.current = 'reviews'
              scrollRightHandler()
            }} className=' w-[28px] h-[28px] md:w-[35px] md:h-[35px] cursor-pointer' />
        </div>
      </div>
      <div className='flex  gap-4 max-w-[1300px] scroll-smooth w-full m-auto h-fit overflow-hidden  '
        ref={sliderRef1}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >

        <TrendingRevCard />
        <TrendingRevCard />
        <TrendingRevCard />
        <TrendingRevCard />
        <TrendingRevCard />

      </div>
      <div className='flex justify-between w-full max-w-[1300px] h-fit px-2 md:px-5 mt-8'>
        <div className='flex gap-1 w-full  h-fit items-center'>
          <div className='w-[5px] h-[5px] bg-yellow-300 rounded-full'></div>
          <span className=' flex gap-5 font-[400] text-[24px]
          md:text-[28px] w-full'>Trending Comments</span>
        </div>
        <div className='flex gap-2 bg-[#A3A3A30D] ps-2 md:px-3 py-2 rounded-md'>
          <img src={ArrowCircleLeft}
            onClick={() => {
              selectSlider.current = 'comments'
              scrollLeftHandler()
            }} className='w-[22px] h-[22px]  md:w-[30px] md:h-[30px] cursor-pointer' />
          <img src={ArrowCircleRight}
            onClick={() => {
              selectSlider.current = 'comments'
              scrollRightHandler()
            }} className=' w-[28px] h-[28px] md:w-[35px] md:h-[35px] cursor-pointer' />
        </div>
      </div>
      <div
        ref={sliderRef2}
        className='flex gap-4 max-w-[1300px] scroll-smooth w-full m-auto h-fit overflow-hidden p-3  '>

        <TrendingCommCard />
        <TrendingCommCard />
        <TrendingCommCard />

      </div>
      <div className=' flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-center'>
        <span className='font-[700] text-[24px]'>Register to select your Streaming Services </span>
        <div className='flex gap-1 '>
          <img src={netflixlogo} alt="Netflix" />
          <img src={hbologo} alt="HBO" />
          <img src={hotstarlogo} alt="Disney+" />
          <img src={hululogo} alt="HULU" />
          <img src={grouplogo} alt="Group" />
        </div>

      </div>
      <button className='w-[250px] h-[58px] rounded-[10px] bg-gradient-to-r from-[purple] to-[#755EFF54] shadow-md shadow-purple-500 '>Register Now</button>
    </div>
  )
}
