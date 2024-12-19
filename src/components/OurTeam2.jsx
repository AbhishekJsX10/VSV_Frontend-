import React, { useState, useRef } from 'react'
import personA from '../assets/TeamMember/person_a.avif'
import personB from '../assets/TeamMember/person_b.avif'
import personC from '../assets/TeamMember/person_c.avif'
import personD from '../assets/TeamMember/person_d.avif'

const TeamMember = ({ name, designation, image, isMobile }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const xRel = (e.clientX - rect.left) / rect.width;
    const yRel = (e.clientY - rect.top) / rect.height;

    const maxRotation = 20;
    const rotateY = maxRotation * (xRel - 0.5) * 2;
    const rotateX = -maxRotation * (yRel - 0.5) * 2;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const cardClasses = isMobile
    ? "w-[150px] h-[200px] mx-auto"
    : "w-[180px] h-[260px] sm:w-[200px] sm:h-[300px]";

  return (
    <div 
      ref={cardRef}
      className="relative group"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      <div
        className="relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovering ? 'none' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d'
        }}
      >
        <img 
          src={image} 
          className={`${cardClasses} rounded-md object-cover`}
          alt={name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
          <h3 className={`text-white ${isMobile ? 'text-lg' : 'text-xl'} font-bold`}>{name}</h3>
          <p className={`text-gray-300 mt-2 ${isMobile ? 'text-sm' : 'text-base'}`}>{designation}</p>
        </div>
      </div>
    </div>
  )
}

const OurTeam2 = () => {
  const teamMembers = [
    { name: "John Doe", designation: "CEO", image: personA },
    { name: "Jane Smith", designation: "Lead Architect", image: personB },
    { name: "Mike Johnson", designation: "Senior Engineer", image: personC },
    { name: "Sarah Wilson", designation: "Project Manager", image: personD }
  ];

  return (
    <>
      {/* Desktop and Tablet Layout */}
      <section className="hidden md:block min-h-[60vh] py-[6rem]">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-center font-bold text-[#C7C8C4]">OUR TEAM</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10 mt-[3rem]">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              designation={member.designation} 
              image={member.image}
              isMobile={false} 
            />
          ))}
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="md:hidden bg-black py-2">
        <h2 className="text-lg sm:text-3xl text-center font-bold text-[#C7C8C4] mb-8">OUR TEAM</h2>
        <div className="grid grid-cols-2 gap-4 px-4">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index} 
              name={member.name} 
              designation={member.designation} 
              image={member.image}
              isMobile={true} 
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default OurTeam2