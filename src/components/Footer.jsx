import React from 'react'
import logo from "../assets/logo.svg"
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import pinterest from "../assets/pinterest.png";
import linkedIn from '../assets/linkedin.png';
export default function Footer() {
  return (
    <div className=' flex w-full h-full p-10  items-center justify-between '>
      <div className='flex gap-10 items-center'>
         <img src = {logo} alt="" />
         <span>Copyrights © 2024. All rights reserved by SyncHomie.com</span>
         <span>Privacy</span>
         <span>Terms </span>
      </div>
      <div className='flex gap-5 '>
        <span>Contact Us</span>
        <img className='w-[20px] h-[20px]' src = {instagram} alt="" />
        <img className='w-[20px] h-[20px]' src = {pinterest} alt="" />
        <img className='w-[20px] h-[20px]' src = {facebook} alt="" />
        <img className='w-[20px] h-[20px]' src = {linkedIn} alt="" />
      </div>
    </div>
  )
}
