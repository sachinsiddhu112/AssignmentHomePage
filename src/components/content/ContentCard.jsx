import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from "../../assets/data";
import warningcircle from "../../assets/warningcircle.png"
import ratingicon from "../../assets/ratingicon.png";
import playicon from '../../assets/playicon.png';
import addContent from "../../assets/addContent.png";
import removeContent from "../../assets/removeContent.png";
export default function ContentCard(props) {
  console.log(props)
  const itemStatus = 'added'
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1400 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1400, min: 1224 },
      items: 5
    },
    Largetablet: {
      breakpoint: { max: 1224, min: 950 },
      items: 4
    },
    table: {
      breakpoint: { max: 950, min: 720 },
      items: 3
    },
    smallTab:{
      breakpoint:{max:720, min:470},
      items:2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div className=' max-w-[1400px] w-full h-fit'>
      <Carousel 
      swipeable = {true}
      responsive={responsive}>
        {
          data.map((item) => (
            <div key={item.id} className='flex flex-col gap-5 w-[300px] md:w-[270px] lg:w-[200px] h-[570px] pb-3  bg-[#1B1B1B] rounded-[10px] ml-7'>
              <div className='relative '>
                {
                 itemStatus == 'added' ?
                  <img className='absolute' src = {addContent} alt = "added" />   
                 : 
                 <img className='absolute' src = {removeContent} alt = 'removed'/>
                }
                <img className='w-[290px] md:w-[270px]lg:w-[200px] h-[300px]' src={item.image} alt="poster" />
              </div>
              <div className='flex justify-between  px-2'>
                <span className='font-[400] text-lg'>{item.name}</span>
                <img className='w-[25px] h-[25px]' src={warningcircle} alt="warning" />
              </div>
              <span className='px-2'>{item.category}</span>
              <div className='flex gap-2 px-2'>
                <img src={ratingicon} alt="rating" />
                <span>{item.rating}</span>
              </div>
              <div className='flex gap-2 bg-[#282828] w-fit h-fit px-2 py-1 rounded-[5px] m-auto '>
                <img src={playicon} alt="play" />
                <button className='text-[#1C97FF] '>watch trailer</button>
              </div>
              <div className='flex gap-1 w-fit h-fit justify-center items-center m-auto'>
                <span className='mb-1'>watch on</span>
                <img className='w-[20px] h-[20px]' src={item.platformIcon} alt="Netflix" />
              </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}
