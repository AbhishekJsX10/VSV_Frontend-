import React, { useRef, useEffect } from 'react'
import heroVideo from '../assets/HeroVid.mp4'
import heroVideo2 from '../assets/New_fashion_video.mp4'
import heroVideo3 from '../assets/old_fashion_video.mp4'

const HeroSection = ({heading=""}) => {
  const videoRef = useRef(null);

  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='relative flex flex-col items-center justify-center h-screen overflow-hidden'>
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover z-0'
      >
        <source src={heroVideo3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/20 mix-blend-difference'>
        <h1 className='text-[2rem] md:text-[3.3rem] lg:text-[3.5rem] xl:text-[4rem] mt-[-10rem] font-bold text-white drop-shadow-lg'>
          VS&V Communication
        </h1>
        <h1 className='text-[2rem] font-bold text-white drop-shadow-lg'>{heading}</h1>
        <h2 className='text-[0.8rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] px-[5rem] text-center font-thin text-white drop-shadow-lg'>
          Transforming Infrastructure with Telecom, Construction, Interiors, and Data Center Excellence.
        </h2>
      </div>
    </div>
  )
}

export default HeroSection