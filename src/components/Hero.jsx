import React, { useEffect } from 'react';
import herobanner from '../assets/herobanner.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, [])

  return (
    <section 
      id='hero'
      className='max-w-screen-2xl py-10 mx-auto h-fit flex flex-col md:flex-row justify-between items-center gap-10'
    >
      <div className='md:pl-56 flex flex-col justify-center items-center md:gap-10 gap-6 p-10'>
        <h1
          data-aos='zoom-in'
          data-aos-delay='200'
          className='text-5xl lg:text-8xl uppercase text-orange-500 font-bold text-center tracking-tight'
        >FINESS CLASSES</h1>
        <button 
          data-aos='zoom-in'
          data-aos-delay='400'
          className='px-5 py-4 bg-orange-500 hover:bg-orange-600 text-white cursor-pointer rounded-xl tracking-tight'
        >
          RESERVE AGORA
        </button>
      </div>

      <div className='flex justify-end items-end'>
        <img 
          src={herobanner}  
          alt="hero banner" 
          className='bg-cover bg-center'
        />
      </div>
    </section>
  )
}

export default Hero