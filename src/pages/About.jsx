import React from 'react'
import HeroSection from '../components/HeroSection'
import CompanyNMarquee from '../components/CompanyNMarquee'
import OurTeam from '../components/OurTeam'
import AboutPageMarquee from '../components/AboutPageMarquee'
import OurTeam2 from '../components/OurTeam2'

const About = () => {
  return (
    <div className='bg-black'>
      <HeroSection heading="About" />
      <CompanyNMarquee />
      {/* <OurTeam /> */}
      <OurTeam2/>
    </div>
  )
}

export default About