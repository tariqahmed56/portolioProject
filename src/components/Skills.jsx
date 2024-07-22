import React from 'react'
import ProgressBar from './ProgressBar'
import './Skill.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin()
const Skills = () => {
    useGSAP(()=>{
        gsap.to('.cover-animation',{
          width: '0%',
          stagger: 0.4,
          scrollTrigger:{
              trigger: '#skills',
              scroller: 'body',
              start: "top 25%",
          },
       
     })  })
  return (
    <div id='skills' className='min-h-[80dvh] py-5  mx-auto grid place-content-center gap-10 bg-[#102C3F]'>
      <h1 className='text-[3rem] text-center font-bold text-white relative'>My <span className='text-[#00ABF0]'>Skills</span>
      <span className='cover-animation !z-20 bg-[#102C3F]'></span>
      </h1>
      <div className="Skills grid grid-cols-1 place-content-center w-full sm:grid-cols-2 relative">
      <ProgressBar skill={'HTML'} percentage={'90'} classPercentage={'w-[90%]'}/>
      <ProgressBar skill={'CSS'} percentage={'85'} classPercentage={'w-[85%]'}/>
      <ProgressBar skill={'JavaScript'} percentage={'70'} classPercentage={'w-[75%]'} />
      <ProgressBar skill={'React'} percentage={'65'} classPercentage={'w-[65%]'}/>
      <ProgressBar skill={'Firebase'} percentage={'78'} classPercentage={'w-[78%]'}/>
      <ProgressBar skill={'Tailwind'} percentage={'65'} classPercentage={'w-[65%]'}/>
      <span className='cover-animation !z-20 bg-[#102C3F]'></span>
      </div>
    </div>
  )
}

export default Skills
