import React from 'react'
import frame1 from "../assets/Frame.png"
import frame2 from "../assets/Frame2.png"
import frame3 from "../assets/Frame3.png"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../styles/ServicesCards.css"

const ServicesCards = () => {
  return (
    <>
    <div className="vsv-services-section py-[12rem] bg-red-400">
      <div className="vsv-services-grid">
        <div className="vsv-service-card md:w-1/2 w-full">
          <div className="vsv-service-content">
            <LazyLoadImage
              src={frame1}
              alt="Service"
              className="vsv-service-icon"
              effect="blur"
              placeholderSrc={frame1}
            />
            <h2 className="vsv-service-title text-md">Mission And Vision</h2>
            <p className="vsv-service-description">
              We develop comprehensive strategic plans that align with your project goals, 
              ensuring efficient resource allocation and optimal project outcomes.
            </p>
          </div>
        </div>
        
        <div className="vsv-service-card md:w-1/2 w-full">
          <div className="vsv-service-content">
            <LazyLoadImage
              src={frame2}
              alt="Service"
              className="vsv-service-icon"
              effect="blur"
              placeholderSrc={frame2}
            />
            <h2 className="vsv-service-title text-md">Why VSV?</h2>
            <p className="vsv-service-description">
              Our team leverages cutting-edge technologies and innovative approaches 
              to deliver creative solutions that address complex construction challenges.
            </p>
          </div>
        </div>
        
        <div className="vsv-service-card md:w-1/2 w-full">
          <div className="vsv-service-content">
            <LazyLoadImage
              src={frame3}
              alt="Service"
              className="vsv-service-icon"
              effect="blur"
              placeholderSrc={frame3}
            />
            <h2 className="vsv-service-title text-md">About VSV</h2>
            <p className="vsv-service-description">
              We maintain rigorous quality control standards throughout every phase 
              of the project, ensuring superior craftsmanship and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServicesCards
