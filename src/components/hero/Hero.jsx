import React from 'react'
import HeroText from './HeroText'
import HeroCard from './HeroCard';
 import bgcopy from '../../assets/bgcopy.png';
export default function Hero() {
  return (
    <div className='flex flex-col gap-10 w-full h-[100] '>
        
      <HeroText/>
      <HeroCard/>
    </div>
  )
}
