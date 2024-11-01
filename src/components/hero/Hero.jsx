import React, { useEffect, useState } from 'react'
import HeroText from './HeroText'
import HeroCardDesktop from './HeroCardDesktop';
import HeroCardIpad from "./HeroCardIpad";
 import bgcopy from '../../assets/bgcopy.png';
export default function Hero() {
  const [smallWindow, setSmallWindow ]= useState(false);

  useEffect(() => {
    window.addEventListener('resize',()=>{
      if(window.innerWidth < 900){
        setSmallWindow(true);
      }
    })
  },[])
  return (
    <div className='flex flex-col gap-10 w-full h-[100] justify-center items-center '>
        
      <HeroText/>
     <HeroCardIpad/>
      
    </div>
  )
}
