import React, { useContext, useRef } from 'react'
import './Hero.css'
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { context } from '../store/Context';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const Hero = () => {
  let {isDarkMode} = useContext(context);
  let linkRef = useRef();
  let timeLine = gsap.timeline();
  useGSAP(()=>{
    timeLine.from('section h1',{
      y:40,
      opacity: 0,
      stagger:0.5
    })
    gsap.from('.btn1',{
      x:-40,
      opacity:0
    },'n')
    gsap.from('.btn2',{
      x:40,
      opacity:0
    },'n')
  });
  timeLine.fromTo('.uncover',{
     width:"100%", 
     duration:0.3 
  },{
    width:"0"
  })

  return (
    <section id='home' className=''>
      
     <h1 className='text-white intro'> Hi, I'm </h1>
     <h1 className='intro text-center'>Tarique Sodho</h1>
     <h1 className='text-[1.6rem] font-bold font-["Poppins"] mywork mt-3' data-fill-text='Website developer'> Website developer </h1>
     <div className="btn-container flex gap-7 mt-4">
           <button className='btn1 px-5 py-2   overflow-hidden  rounded-md font-["Poppins"] font-semibold'>Hire me</button>
           <button className='btn2 px-5 py-2   rounded-md font-["Poppins"] overflow-hidden font-semibold'>View CV</button>
     </div>
     <div className="socialLinks flex gap-6 relative mt-[100px]">
      <a href="https://www.facebook.com/TariqAhMedSodho56?mibextid=ZbWKwL">
        <div className="link link1 z-50 border relative border-[#00ABF0] rounded-full w-[2.4rem] h-[2.4rem] overflow-hidden transition-all cursor-pointer">
           
            <TiSocialFacebook className='text-[#00ABF0] text-[2.2rem] sm:text-[2.2rem] hover:text-[#a9b0b3]'/>
            <span className='hover-effect -z-10'></span>
        </div>
      </a>
        <a href="www.linkedin.com/in/tariq-ahmed-798b02210">
        
        <div ref={linkRef} className="link link2 border z-50 relative border-[#00ABF0] rounded-full w-[2.4rem] h-[2.4rem] overflow-hidden transition-all cursor-pointer">
            <TiSocialLinkedin className='text-[#00ABF0] hover:text-[#a9b0b3] text-[3rem] sm:text-[2.2rem]'/>
            <span className='hover-effect -z-10'></span>
        </div>
        </a>
            <span className='inline-block  h-full absolute bg-[#081B29] top-0 left-0 z-[100] uncover'></span>
     </div>
    </section>
  )
}

export default Hero
