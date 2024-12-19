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
              We develop comprehensive strategic plans that align with your project goals, 
              ensuring efficient resource allocation and optimal project outcomes.
            </p>
          </div>
        </div>
        
        <div className="card card-center">
          <div className="card-content">
            <h2 className="card-heading">Why VSV?</h2>
            <p className="card-text">
              Our team leverages cutting-edge technologies and innovative approaches 
              to deliver creative solutions that address complex construction challenges.
            </p>
          </div>
        </div>
        
        <div className="card card-right">
          <div className="card-content">
            <h2 className="card-heading">About VSV</h2>
            <p className="card-text">
              We maintain rigorous quality control standards throughout every phase 
              of the project, ensuring superior craftsmanship and client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationCards