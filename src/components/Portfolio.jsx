import React from 'react'
import Project from './Project'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Photo from '../assets/photo.jpg'
import pepsi from '../assets/pepsi.png'
import pw from '../assets/pw.png'
import eco from '../assets/Ecommerce.png'
import './Portfolio.css'

gsap.registerPlugin()
const Portfolio = () => {
  useGSAP(()=>{
    gsap.to('.uncoverAnimation',{
      width: '0%',
      stagger: 0.4,
      scrollTrigger:{
          trigger: '#portfolio',
          scroller: 'body',
          start: "top 10%",
      },
   
 })  })
  return (
    <section className='min-h-[100dvh] py-3 flex flex-col justify-center items-center gap-8 ' id='portfolio'>
      <h1 className='text-white text-center text-[3rem] font-bold'>MY <span className='text-[#00ABF0]'>Portfolio </span>
      <span className="uncoverAnimation bg-[#081B29]"></span>
      </h1>
      <div className="ProjectsContainer container flex gap-3 flex-col justify-center items-center md:flex-row">
        <a href="https://ecommerce-admin-dashboard-crud.netlify.app">

        <Project img={pw} title={"Admin Dashboard"} technology={"React , Tailwind , Firebase"}/>
        </a>
        <a href="https://landingpagelikepepsi.netlify.app">

<Project img={pepsi} title={"Pepsi Landing Page"} technology={"HTML , CSS , JS"}/>
</a>
<a href="https://smashcodeassignment1.netlify.app/">

<Project img={eco} title={"Ecommerce"} technology={"React , Tailwind , Firebase"}/>
</a>
      </div>
    </section>
  )
}

export default Portfolio
