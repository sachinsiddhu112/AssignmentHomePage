import React, { useEffect, useState } from 'react'
import HeroText from './HeroText'
import HeroCardDesktop from './HeroCardDesktop';
import HeroCardIpad from "./HeroCardIpad";
import bgcopy from '../../assets/bgcopy.png';
export default function Hero() {
  const [smallWindow, setSmallWindow] = useState(false);

  const handleWidth = () => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700) {
        setSmallWindow(true);
      }
    });
  }
  useEffect(() => {
    handleWidth();
    return () => window.removeEventListener('resize', handleWidth)
  }, [])
  return (
    <div className='flex flex-col gap-10 w-full h-[100] justify-center items-center '>

      <HeroText />
      {
        smallWindow ? <HeroCardDesktop /> : <HeroCardIpad />
      }

    </div>
  )
}
