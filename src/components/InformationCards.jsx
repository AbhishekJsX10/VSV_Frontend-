import React from 'react'
import '../styles/InformationCards.css'

const InformationCards = () => {
  return (
    <div className="information-cards-container py-1 ">
      <div className="cards-wrapper">
        <div className="card card-left">
          <div className="card-content">
            <h2 className="card-heading">Mission And Vision</h2>
            <p className="card-text">
            We aim to lead in telecom solutions, building services that inspire progress and redefine excellence in design. Through innovation, quality, and customer satisfaction, we aspire to leave a lasting legacy of connection and reliability.
            </p>
          </div>
        </div>
        
        <div className="card card-center">
          <div className="card-content">
            <h2 className="card-heading">Why VS&V?</h2>
            <p className="card-text">
            With ISO 9001:2015 and OH&SMS 45001:2018 certifications, VS&V ensures quality, safety, and excellence. Trusted by Huawei, Smarttel, and others, we deliver results, including high-altitude projects and global awards like Huawei Nepal Core CW Partner 2019.
            </p>
          </div>
        </div>
        
        <div className="card card-right">
          <div className="card-content">
            <h2 className="card-heading">About VS&V</h2>
            <p className="card-text">
            Established in 2004, VS&V excels in telecom, interiors, and construction across India and Nepal. With 19+ years of expertise and a focus on ethical practices, we are expanding as the VS&V Group to broaden horizons and deliver unmatched service.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationCards