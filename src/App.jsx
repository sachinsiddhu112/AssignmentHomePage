import { useState } from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/Navbar'
import Trending from './components/trending/Trending'
import Content from './components/content/Content'
import Footer from "./components/Footer"

function App() {


  return (
    <div className='flex flex-col gap-10 bg-background  w-full h-full text-white pb-10 items-center justify-center overflow-hidden'>
      <Navbar/>
      <div className="flex flex-col bg-[url('/src/assets/background2.png')] gap-10 w-full h-full text-white pb-10">
      <div className='w-full h-[100] py-10 bg-heroBg'>
     <Hero/>
      </div>
     <Trending/>
     <Content/>
     <hr className='w-full h-[2px]'/>
     <Footer/>
     </div>
    </div>
  )
}

export default App
