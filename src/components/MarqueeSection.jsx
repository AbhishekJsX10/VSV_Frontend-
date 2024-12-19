import React, { useMemo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const ClientImage = ({ src, alt = "Client Logo" }) => {
  return (
    <div className="image_wrapper mx-2">
      <img 
        className="w-[170px] h-[170px] object-contain" 
        src={src} 
        alt={alt}
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </div>
  );
};

const MarqueeSection = ({page="home"}) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const mountTimer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => {
      clearTimeout(mountTimer);
      setIsVisible(false);
    };
  }, [location.pathname, page]);

  const clientImages = useMemo(() => [
    "https://vsvcommunication.com/wp-content/uploads/2024/03/3-2-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/4-1-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/5-2-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/Untitled-design-18-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/1-3-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/2-1-300x300.png"
  ], []);

  const bgColor = page === "home" ? "#C7C8C4" : "#000000";

  if (!isVisible) {
    return (
      <div 
        className={`
          min-h-[300px]
          ${page === "home" ? "bg-[#C7C8C4]" : "bg-black"}
          ${page === "home" ? "rounded-b-[1rem] md:rounded-b-[3rem]" : "rounded-t-[1rem] md:rounded-t-[3rem]"}
        `}
      />
    );
  }

  return (
    <div 
      key={`${location.pathname}-${page}`}
      className={`
        transition-all duration-500 ease-in-out pt-2
        ${page === "home" ? "bg-[#C7C8C4]" : "bg-black"}
        ${page === "home" ? "rounded-b-[1rem] md:rounded-b-[3rem]" : "rounded-t-[1rem] md:rounded-t-[3rem]"}
        overflow-hidden 
      `}
    >
      <div className="title text-center pt-1 ">
        <h1 
          className={`
            text-[3rem] md:text-[4rem] lg:text-[5rem] 
            font-semibold transition-colors duration-500
            ${page === "home" ? "text-black" : "text-white"}
          `}
        >
          Our Clients
        </h1>
      </div>

      <div className="relative">
        <div 
          className="absolute inset-y-0 left-0 w-32 z-10" 
          style={{ 
            background: `linear-gradient(to right, ${bgColor} 20%, transparent 100%)`,
          }} 
        />
        <div 
          className="absolute inset-y-0 right-0 w-32 z-10" 
          style={{ 
            background: `linear-gradient(to left, ${bgColor} 20%, transparent 100%)`,
          }} 
        />
        
        <div className={`
          ${page === "home" ? "rounded-b-[1rem] md:rounded-b-[3rem]" : "rounded-t-[1rem] md:rounded-t-[3rem]"}
          overflow-hidden
        `}>
          <Marquee 
            key={`${location.pathname}-${page}`}
            direction="right" 
            speed={100}
            delay={0}
            gradient={false}
            className="blur-[0.5px]"
            pauseOnHover={true}
          >
            {clientImages.map((src, index) => (
              <ClientImage key={`${location.pathname}-${page}-${index}`} src={src} />
            ))}
            {clientImages.map((src, index) => (
              <ClientImage key={`${location.pathname}-${page}-repeat-${index}`} src={src} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;