import React from 'react'
import logo from '../assets/logo.svg'
import searchIcon from "../assets/searchIcon.png";
export default function Navbar() {
    return (
        <div className='flex flex-row items-center justify-between w-full h-[60px] py-1 items-center px-[25px] bg-gradient-to-b from-[#282453CC] to-[#00000000]'>
            <div className='flex flex-row justify-between gap-10'>
                <img className='w-[60px] ' src={logo} alt="" />
                <div className='flex flex-row justify-between w-[500px] gap-[20-px] items-center'>
                    <div>
                        Home
                    </div>
                    <div>
                        Discover
                    </div>
                    <div>
                        Calender
                    </div>
                    <div>
                        People
                    </div>
                    <div>
                        Bookmarks
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
