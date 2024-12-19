import img1 from "../assets/isa.jpg"
import img2 from "../assets/isa.jpg"
import img3 from "../assets/isa.jpg"
import img4 from "../assets/isa.jpg"
import img5 from "../assets/isa.jpg"
// import img6 from "../assets/TeamMember/1.png"

import React from 'react'
import Marquee from 'react-fast-marquee';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OurTeam = () => {
  return (
    <>
    <div className="hidden lg:block ">
    <section className="bg-black text-white min-h-[130vh] mt-[1rem] py-[5rem] relative overflow-hidden">
      <div className='min-h-[130vh] w-full flex justify-center items-center'>
        <div className='flex justify-center items-center h-[5rem] w-[auto] relative'>
          <h1 className="text-4xl sm:text-7xl font-bold text-white p-2">OUR TEAM</h1>
          {/* top row images */}
          <LazyLoadImage
             src={img1}
             className="absolute top-[-12rem] left-0 w-[23.5rem] h-[11.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img2}
             className="absolute top-[-8.5rem] right-[-17.7rem] w-[17rem] h-[8rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img2}
           />
          <LazyLoadImage
             src={img2}
             className="absolute top-[-16.2rem] right-[-7.7rem] w-[7rem] h-[7rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img2}
           />
          <LazyLoadImage
             src={img1}
             className="absolute top-[-21.2rem] right-[-17.6rem] w-[9.3rem] h-[12rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute top-[-7rem] left-[-14.3rem] w-[13.5rem] h-[13.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute top-[-19rem] left-[-18.8rem] w-[18rem] h-[11.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          {/* bottom row Images */}
          <LazyLoadImage
             src={img1}
             className="absolute bottom-[-8rem] right-[0rem] w-[13.1rem] h-[7.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute bottom-[-12rem] left-[0rem] w-[10.2rem] h-[11.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute bottom-[-10rem] left-[-8.8rem] w-[8rem] h-[8rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute bottom-[-5rem] right-[-12.7rem] w-[12rem] h-[10rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
          <LazyLoadImage
             src={img1}
             className="absolute bottom-[-15.5rem] right-[-19.7rem] w-[19rem] h-[10rem] object-cover grayscale hover:grayscale-0 transition-all duration-300"
             alt=""
             effect="blur"
             placeholderSrc={img1}
           />
        </div>
      </div>
    </section>
    </div>
    {/* for mobile devices */}
    <div className="bg-black mt-[50vh] flex flex-col justify-center lg:hidden items-center py-4">
      <h1 className="text-5xl text-center sm:text-7xl font-bold text-white p-2 pb-5">OUR TEAM</h1>
      <div className="w-full overflow-hidden">
        <Marquee 
          direction="right" 
          speed={40} 
          gradient={false}
          pauseOnHover={true}
          className="py-2"
        >
          {[...Array(9)].map((_, index) => (
            <div key={index} className="image_wrapper mx-2">
              <LazyLoadImage
                src={img1}
                className="w-[15rem] h-[20rem] rounded-md object-cover grayscale hover:grayscale-0 transition-all duration-300"
                alt=""
                effect="blur"
                placeholderSrc={img1}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
    </>
  )
}

export default OurTeam