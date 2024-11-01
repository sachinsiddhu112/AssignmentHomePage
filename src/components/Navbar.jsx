import React from 'react'
import logo from '../assets/logo.svg'
import searchIcon from "../assets/searchIcon.png";
import vector from "../assets/vector.png"
import bookmarkIcon from "../assets/bookmarkIcon.png";
export default function Navbar() {
    return (
        <div className='flex flex-row items-center justify-between w-full h-[60px] py-1 items-center px-[25px] bg-gradient-to-b from-[#282453CC] to-[#00000000] overflow-hidden'>
            <div className='flex flex-row justify-between gap-10'>
                <img className='w-[60px] ' src={logo} alt="" />
                <div className='flex flex-row justify-between w-[500px] gap-[20-px] items-center'>
                    <div>
                        Home
                    </div>
                    <div className='flex gap-1 items-center cursor-pointer '>
                        <span>Discover</span>
                        <img className='w-[15px] h-[10px] mt-1 ml-1' src={vector} alt="" />
                    </div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <span>Calendar</span>
                        <img className='w-[15px] h-[10px] mt-1 ml-1' src={vector} alt="" />
                    </div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <span>People</span>
                        <img className='w-[15px] h-[10px] mt-1 ml-1' src={vector} alt="" />
                    </div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <img className='w-[25px] h-[25px]' src={bookmarkIcon} alt="" />
                        <span>Bookmarks</span>
                    </div>
                </div>
            </div>
            <div className='w-fit h-fit flex gap-[30px] mx-5'>
                <img src={searchIcon} alt="Icon" />
                <button>Sign Up</button>
            </div>
        </div>
    )
}
