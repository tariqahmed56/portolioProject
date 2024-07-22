import React from 'react'
import './Contact.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Contact = () => {

   useGSAP(()=>{
    gsap.to('.coverAnimation',{
        rotate: "360deg"
    })
    gsap.to('.coverAnimation',{
        scrollTrigger:{
            trigger: "#contact",
            scroller: "body",
            start: "top 0%"
        },
        width: "0",
        duration: 0.4,

    })
   })



  return (
    <div id='contact' className='h-[100dvh] flex items-center flex-col md:py-8 py-3'>
       <h1 className='text-[3.5rem] font-semibold relative text-center text-white'>
        Contact <span  className='text-[#00ABF0]'>Me</span>
        <span className='coverAnimation  bg-[#081B29] '></span>
        </h1>
        <form action="#" className='md:w-[500px] flex flex-col gap-3 px-4 relative items-center'>
            <div className='flex gap-3 container flex-wrap'>
            <input type="text" placeholder='Your Name'
             className='border-2 w-full sm:w-[48%] text-white  border-[#00ABF0] bg-transparent hover:bg-[#102C3F] rounded-md py-2 px-3 outline-none'/>
            <input type="Email" placeholder='Email' className='border-2 w-full text-white sm:w-[48%] border-[#00ABF0] bg-transparent hover:bg-[#102C3F] rounded-md py-2 px-3 outline-none'/>
            </div>
            <div className='flex gap-3 container flex-wrap'>
            <input type="text" max={10} min={10} placeholder='Mobile No.' className='border-2 text-white w-full sm:w-[48%] bg-transparent border-[#00ABF0] bg-[#102C3F] rounded-md py-2 px-3 outline-none'/>
            <input type="text" placeholder='Your Country' className='border-2 w-full text-white sm:w-[48%] bg-transparent border-[#00ABF0] hover:bg-[#102C3F] rounded-md py-2 px-3 outline-none'/>
            </div>
            <textarea rows={'10'} placeholder='Message' className='w-[98%] text-white bg-transparent border-2 border-[#00ABF0] hover:bg-[#102C3F] rounded-md px-3 py-2 outline-none'></textarea>
             <button 
             className=' w-[150px] h-[40px] mt-2 overflow-hidden bg-transparent button  rounded-md border-2 border-[#00ABF0] self-center relative'>
              <span className='absolute z-30 text-2xl font-normal hover:text-[#102C3F] text-white top-[4px] left-[32px]'>Submit</span>
                <div className='effect-hover !z-10'></div>
                </button>
                <span className="coverAnimation  absolute inline-block w-full h-full bg-[#081B29]"></span>
        </form>
    </div>
  )
}

export default Contact
