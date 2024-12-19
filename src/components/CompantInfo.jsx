import React, { useState, useEffect, useRef } from 'react'
import CountUp from 'react-countup'
import '../styles/CompanyInfo.css'

const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCounters, setVisibleCounters] = useState({
    years: false,
    projects: false,
    clients: false,
    certifications: false
  });
  const sectionRef = useRef(null);
  const counterRefs = {
    years: useRef(null),
    projects: useRef(null),
    clients: useRef(null),
    certifications: useRef(null)
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint in Tailwind

    if (isMobile) {
      // Mobile: observe each counter individually
      const observers = Object.entries(counterRefs).map(([key, ref]) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCounters(prev => ({ ...prev, [key]: true }));
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.4 }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }

        return observer;
      });

      return () => {
        observers.forEach(observer => {
          Object.values(counterRefs).forEach(ref => {
            if (ref.current) {
              observer.unobserve(ref.current);
            }
          });
        });
      };
    } else {
      // Desktop: observe entire section
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.4 }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }
  }, []);

  return (
    <div className="company-info-section py-[1rem] " ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Company Overview */}
          <div className="company-card h-full">
            <div className="card-content">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Company Overview</h2>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm lg:text-base">
                  VS & V Communication Pvt Ltd. is incorporated in 2004 by entrepreneur Mr. Vijay 
                  Sinha, located in Dwarka, New Delhi. The Company operates in 3 divisions like 
                  Turnkey (T/K), Network Integration, Project Implementation and Annual 
                  Comprehensive Rate (AMC) work. With a track record of experience since 2010, 
                  the company started as an Electronics business in Network Infrastructure. Over 
                  the years, we have successfully executed several prestigious projects Pan India 
                  with valley compliances. The Company believes in high focus on long term 
                  association, ethical business integrity and commitment.
                </p>
                <p className="text-gray-300 text-sm lg:text-base">
                  The thought behind of formulating a new company is to merge these two 
                  company under a larger group of companies which will be known as the VSV 
                  GROUP OF COMPANIES and will be focusing on the IT & Telecommunication 
                  service sector.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Vision and Stats */}
          <div className="flex flex-col gap-8">
            {/* Vision Section */}
            <div className="company-card">
              <div className="card-content">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Vision</h2>
                <p className="text-gray-300 text-sm lg:text-base">
                  Our vision is to establish ourselves as the leading provider of safe communications 
                  solutions, building services that not only stand the test of time but also inspire 
                  positive change in the future. We aim to redefine standards of excellence in today's digital 
                  landscape while maintaining the highest levels of security and reliability.
                </p>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="stats-section">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center counter-item" ref={counterRefs.years}>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                    <CountUp end={20} duration={2.5} suffix="+" start={0} delay={0} useEasing={true} enableScrollSpy={false} startOnMount={false} redraw={true}>
                      {({ countUpRef }) => (
                        <span ref={countUpRef}>
                          {window.innerWidth < 768 ? (visibleCounters.years ? '20+' : '0') : (isVisible ? '20+' : '0')}
                        </span>
                      )}
                    </CountUp>
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">Years of Experience</p>
                </div>
                <div className="text-center counter-item" ref={counterRefs.projects}>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                    <CountUp end={1000} duration={2.5} suffix="+" start={0} delay={0} useEasing={true} enableScrollSpy={false} startOnMount={false} redraw={true}>
                      {({ countUpRef }) => (
                        <span ref={countUpRef}>
                          {window.innerWidth < 768 ? (visibleCounters.projects ? '1000+' : '0') : (isVisible ? '1000+' : '0')}
                        </span>
                      )}
                    </CountUp>
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">Projects Done</p>
                </div>
                <div className="text-center counter-item" ref={counterRefs.clients}>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                    <CountUp end={300} duration={2.5} suffix="+" start={0} delay={0} useEasing={true} enableScrollSpy={false} startOnMount={false} redraw={true}>
                      {({ countUpRef }) => (
                        <span ref={countUpRef}>
                          {window.innerWidth < 768 ? (visibleCounters.clients ? '300+' : '0') : (isVisible ? '300+' : '0')}
                        </span>
                      )}
                    </CountUp>
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">Satisfied Clients</p>
                </div>
                <div className="text-center counter-item" ref={counterRefs.certifications}>
                  <h3 className="text-4xl lg:text-5xl font-bold mb-2">
                    <CountUp end={64} duration={2.5} start={0} delay={0} useEasing={true} enableScrollSpy={false} startOnMount={false} redraw={true}>
                      {({ countUpRef }) => (
                        <span ref={countUpRef}>
                          {window.innerWidth < 768 ? (visibleCounters.certifications ? '64' : '0') : (isVisible ? '64' : '0')}
                        </span>
                      )}
                    </CountUp>
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">Govt Certifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompanyInfo