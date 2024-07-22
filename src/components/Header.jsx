import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.png'
import './Header.css'
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { context } from '../store/Context';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
function Header() {
  let {isDarkMode,setIsDarkMode, timeLine} = useContext(context);
  let logoRef = useRef();
  let ThemeBtnRef = useRef();
   let [isMenuOpen,setIsMenuOpen] =useState(false);

  function toggleMode(){
    console.log(isDarkMode);
    setIsDarkMode(prev=>!prev)
   }
   function toggleMenu(){
    setIsMenuOpen(prev=>!prev)
    console.log(isDarkMode)
   }

   useGSAP(()=>{

    timeLine.fromTo(logoRef.current,{
     opacity:0,
     y:-40,
     duration: 0.3,
    },{
      opacity:1,
      y:0,

    })
    timeLine.from("nav a",{
    
        opacity:0,
        y:-40,
        duration: 0.5,
        stagger: 0.2
      })
      timeLine.fromTo(ThemeBtnRef.current,{
        opacity: 0,
        y: -40,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.3,
      })
    
   })
 
  return (
    <header className={`container mx-auto h-[4.5rem] flex justify-between  items-center sticky px-3 ${isMenuOpen ? 'h-screen' : null} w-full overflow-y-visible`}>
      <a href="#" id='#logo' ref={logoRef}>
        <img src={logo} alt="logo" className='w-[4.4rem]'/>
      </a>


     <nav className={`sm:flex justify-between gap-12 z-[99] items-center hidden`} id='#nav'>
     <a href="#home" className='relative'>
    Home
      <span className='bottom-line'></span>
     </a> 
     <a href="#about" className='relative'>
    About
      <span className='bottom-line'></span>
     </a> 
     <a href="#portfolio">
      Portfolio
      <span className='bottom-line'></span>
     </a>
     <a href="#skills">
      Skills 
      <span className='bottom-line'></span>
     </a> 
      <a href="#contact">
      Contact
      <span className='bottom-line'></span>
     </a>
     
     </nav>
     {/* for small screens */}
     <nav
     className={`flex sm:hidden   transition justify-between z-50
      gap-12 items-center  flex-col absolute w-full top-[0rem] bg-[#42207d] left-0  py-10
       ${isMenuOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'}`} id='#nav'>
      <IoMdClose color='white' className='font-bold text-3xl self-end mr-4 cursor-pointer' onClick={toggleMenu}/>
     <a href="#home" className='relative'>
    Home
      <span className='bottom-line'></span>
     </a> 
     <a href="#about" className='relative'>
    About
      <span className='bottom-line'></span>
     </a> 
     <a href="#skills">
      Skills 
      <span className='bottom-line'></span>
     </a> 
     <a href="#portfolio">
      Portfolio
      <span className='bottom-line'></span>
     </a>
      <a href="#contact">
      Contact
      <span className='bottom-line'></span>
     </a>
     
       
     </nav>
     <FaBars color='white' onClick={toggleMenu} className='sm:hidden cursor-pointer text-[1.6rem]'/>
    </header>
  )
}

export default Header
