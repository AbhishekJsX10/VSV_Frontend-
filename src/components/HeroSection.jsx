import React, { useRef, useEffect } from 'react'
import heroVideo from '../assets/HeroVid.mp4'

const HeroSection = ({heading=""}) => {
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const videoElement = videoRef.current;
    
  //   if (videoElement) {
  //     // Debugging logs
  //     console.log('Video source:', videoElement.src);
  //     console.log('Video exists:', !!videoElement);
      
  //     videoElement.onerror = (e) => {
  //       console.error('Video error:', e);
  //       console.error('Video error details:', {
  //         src: videoElement.src,
  //         networkState: videoElement.networkState,
  //         readyState: videoElement.readyState,
  //         error: videoElement.error
  //       });
  //     };

  //     // Attempt to play
  //     videoElement.play().catch(error => {
  //       console.error('Autoplay was prevented:', error);
  //     });
  //   }
  // }, []);

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
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute z-10 top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/20 mix-blend-difference'>
        <h1 className='text-[2rem] md:text-[3.3rem] lg:text-[3.5rem] xl:text-[4rem] mt-[-10rem] font-bold text-white drop-shadow-lg'>
          VSV Communication
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