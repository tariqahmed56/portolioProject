import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import Hero from './components/Hero'
import { useContext } from 'react'
import { ContextProvider } from './store/Context'
import { FaWhatsapp } from "react-icons/fa6";
import About from './components/About'
import ParticlesComponent from './components/particles'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="main bg-[#081B29] min-h-[100dvh] w-[100vw] overflow-x-hidden">
      <div className="mx-auto">
        <ContextProvider>
      <Header />
          <div className='absolute h-[100vh] '>
          <ParticlesComponent id="particles" className="absolute z-0"/>
          </div>
          <Hero />
      <About/>
      <Portfolio />
      <Skills />
      <Contact />
      <Footer/>
        <div className='z-50'>
        <a href='https://wa.me/03420198090' 
        className='w-14 wt-a overflow-hidden h-14 rounded-full flex justify-center items-center fixed bottom-[65px] right-6 border border-[#00ABF0]'>
           <span className=' wt'></span>
        <FaWhatsapp 
        className='sm:text-[2.3rem] text-[2.8rem] text-[#fff] wt-logo'/>
        </a>
        </div>

        </ContextProvider>
        </div>
     
    </div>
    
  )
}
export default App
