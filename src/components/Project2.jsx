import project1 from "../assets/Project_Images/project1.avif"
import project2 from "../assets/Project_Images/project2.avif"
import project3 from "../assets/Project_Images/project3.avif"
import project4 from "../assets/Project_Images/project4.avif"
import project5 from "../assets/Project_Images/project5.avif"
import project6 from "../assets/Project_Images/project6.avif"
import project7 from "../assets/Project_Images/project7.avif"
import project8 from "../assets/Project_Images/project8.avif"
import project9 from "../assets/Project_Images/project9.avif"
import project10 from "../assets/Project_Images/project10.avif"
import project11 from "../assets/Project_Images/project11.avif"

import React from 'react'
import Marquee from 'react-fast-marquee';

const Project2 = () => {
  return (
    <>
      <div className="hidden lg:block ">
        <section className="bg-black text-white min-h-[120vh] py-[2rem] pt-[7rem] relative overflow-hidden">
          <div className='min-h-[120vh] w-screen flex justify-center items-center'>
            <div className='flex justify-center items-center w-auto h-[5rem] relative'>
              <h1 className="text-4xl sm:text-7xl font-bold text-[C7C8C4] p-2">OUR PROJECTS</h1>
              {/* top row images */}
              <img
                src={project1}
                className="absolute top-[-15rem] left-[0rem] w-[34rem] h-[14rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project2}
                className="absolute top-[-8.5rem] right-[-19.5rem] w-[19rem] h-[8rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project3}
                className="absolute top-[-16rem] right-[-7.5rem] w-[7rem] h-[7rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project4}
                className="absolute top-[-21rem] right-[-17.4rem] w-[9.3rem] h-[12rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project5}
                className="absolute top-[-9rem] left-[-14rem] w-[13.5rem] h-[13.5rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project6}
                className="absolute top-[-20.9rem] left-[-18.5rem] w-[18rem] h-[11.5rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              {/* bottom row Images */}
              <img
                src={project7}
                className="absolute bottom-[-11rem] right-[0rem] w-[20rem] h-[9.5rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project8}
                className="absolute bottom-[-19rem] left-[0rem] w-[12.7rem] h-[17.5rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project9}
                className="absolute bottom-[-9rem] left-[-9.5rem] w-[9rem] h-[9rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project10}
                className="absolute bottom-[-5rem] right-[-12.5rem] w-[12rem] h-[10rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
              <img
                src={project11}
                className="absolute bottom-[-15.5rem] right-[-19.5rem] w-[19rem] h-[10rem] object-cover hover:grayscale-0 transition-all duration-300"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>

      {/* for mobile devices */}
      <div className="min-h-[120vh] mt-[-6rem] flex flex-col justify-center lg:hidden items-center py-4">
        <h1 className="text-3xl text-center sm:text-7xl font-bold text-white p-2 pb-5">OUR PROJECTS</h1>
        <Marquee direction="right" speed={50} pauseOnHover={true}>
          <div className="image_wrapper py-2 mx-3">
            <img
              src={project1}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 1"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project2}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 2"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project3}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 3"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project4}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 4"
            />
          </div>
          <div className='image_wrapper mx-3'>
            <img
              src={project5}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 5"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project6}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 6"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project7}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 7"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project8}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 8"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project9}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 9"
            />
          </div>
          <div className="image_wrapper mx-3">
            <img
              src={project10}
              className="w-[15rem] h-[20rem] rounded-md object-cover hover:grayscale-0 transition-all duration-300"
              alt="Project 10"
            />
          </div>
        </Marquee>
      </div>
    </>
  )
}

export default Project2
