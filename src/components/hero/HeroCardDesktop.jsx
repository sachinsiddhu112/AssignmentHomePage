import React from 'react'
import heroCardsData from '../../assets/heroCardsData.js'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
export default function HeroCard() {
  const responsive = {
    
    
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1
    }
  }
  return (
    <div className='  w-full h-fit items-center m-auto'>
      <Carousel
        swipeable={true}
        responsive={responsive}
        showDots = {true}
        autoPlay = {true}
        autoPlaySpeed={1000}
        transitionDuration={1000}
        infinite = {true}
        removeArrowOnDeviceType={["tablet", "mobile"]}>
        {
          heroCardsData.map((item,ind) => (
            <div key={ind} className=' flex flex-col gap-2 items-center w-[300px] h-[260px] bg-[#141421] m-auto rounded-[10px] m-auto'>
              <img src={item.image} alt="" />
              <div className='flex gap-3 w-fit h-fit  justify-center '>
                <img className="w-[15px] h-[15px]" src={item.icon} alt="" />
                <span className='w-[240px]'>{item.desc}</span>
              </div>

            </div>

          ))
        }
      </Carousel>
    </div>
  )
}
