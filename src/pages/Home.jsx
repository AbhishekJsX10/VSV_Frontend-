import React from 'react'
import HeroSection from '../components/HeroSection'
import InformationCards from '../components/InformationCards'
import Project from '../components/Projects'
import Project2 from '../components/Project2'
import UpdatesNClients from '../components/UpdatesNClients'
import GetInTouch from '../components/GetInTouch'

export default function Home() {
  return (
    <div data-scroll-container className="home-container bg-black">
      <section className="hero-section">
        <HeroSection />
      </section>
      <section className="updates-clients-section">
        <UpdatesNClients />
      </section>
      <section className="information-cards">
        <InformationCards/>
      </section>
      <section className="projects-section-wrapper" style={{
        width: '100%',
        background: '#000000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Project2 />
      </section>
      <section data-scroll-section className='footer-section'>
        <GetInTouch />
      </section>
    </div>
  )
}