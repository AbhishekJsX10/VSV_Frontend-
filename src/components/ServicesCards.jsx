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
            We aim to lead in telecom solutions, building services that inspire progress and redefine excellence in design. Through innovation, quality, and customer satisfaction, we aspire to leave a lasting legacy of connection and reliability.
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
            <h2 className="vsv-service-title text-md">Why VS&V?</h2>
            <p className="vsv-service-description">
            With ISO 9001:2015 and OH&SMS 45001:2018 certifications, VS&V ensures quality, safety, and excellence. Trusted by Huawei, Smarttel, and others, we deliver results, including high-altitude projects and global awards like Huawei Nepal Core CW Partner 2019.
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
            <h2 className="vsv-service-title text-md">About VS&V</h2>
            <p className="vsv-service-description">
            Established in 2004, VS&V excels in telecom, interiors, and construction across India and Nepal. With 19+ years of expertise and a focus on ethical practices, we are expanding as the VS&V Group to broaden horizons and deliver unmatched service.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServicesCards
