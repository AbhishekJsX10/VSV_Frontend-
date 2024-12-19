import React from 'react'
import HeroSection from '../components/HeroSection'
import MarqueeSection from '../components/MarqueeSection'
import ServicesCards from '../components/ServicesCards'
import ServiceNMarquee from '../components/ServiceNMarquee'

const Services = () => {
  return (
    <div className='bg-black'>
    <HeroSection heading="Services" />
    <ServiceNMarquee />
    </div>
  )
}

export default Services