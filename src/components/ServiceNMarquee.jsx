import React from 'react'
import MarqueeSection from './MarqueeSection'
import ServicesCards from './ServicesCards'

const ServiceNMarquee = () => {
  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed="0.1"  className='mt-[-0.04rem] w-auto rounded-xl'>
        <MarqueeSection page='services' />
        <ServicesCards />
    </div>
    </>
  )
}

export default ServiceNMarquee