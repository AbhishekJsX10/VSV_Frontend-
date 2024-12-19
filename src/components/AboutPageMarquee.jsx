import React, { useMemo, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const ClientImage = ({ src, alt = "Client Logo", onLoad }) => {
  return (
    <div className="image_wrapper mx-2">
      <img 
        className="w-[170px] h-[170px] object-contain" 
        src={src} 
        alt={alt}
        onLoad={onLoad}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

const AboutPageMarquee = ({page="about"}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);

  const clientImages = useMemo(() => [
    "https://vsvcommunication.com/wp-content/uploads/2024/03/3-2-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/4-1-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/5-2-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/Untitled-design-18-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/1-3-300x300.png",
    "https://vsvcommunication.com/wp-content/uploads/2024/03/2-1-300x300.png"
  ], []);

  const handleImageLoad = () => {
    setLoadedImages(prev => {
      const newCount = prev + 1;
      if (newCount === clientImages.length) {
        setTimeout(() => setIsLoaded(true), 100);
      }
      return newCount;
    });
  };

  useEffect(() => {
    return () => {
      setIsLoaded(false);
      setLoadedImages(0);
    };
  }, []);

  return (
    <div className={`${page === "home" ? "bg-[#C7C8C4]" : "bg-black"} pb-[2rem] rounded-t-[3rem] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="title text-center pt-4">
        <h1 className={`text-[3rem] md:text-[4rem] lg:text-[5rem] font-semibold ${page === "home" ? "text-black" : "text-white"}`}>
          Our Clients
        </h1>
      </div>

      <div className="overflow-hidden">
        <Marquee 
          direction="right" 
          speed={100}
          gradient={true} 
          gradientWidth={200}
          gradientColor={page === "home" ? "#C7C8C4" : "#000000"}
          className="blur-[0.5px]"
          play={isLoaded}
        >
          {clientImages.map((src, index) => (
            <ClientImage 
              key={index} 
              src={src} 
              onLoad={handleImageLoad}
            />
          ))}
          {clientImages.map((src, index) => (
            <ClientImage 
              key={`repeat-${index}`} 
              src={src}
              onLoad={handleImageLoad}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutPageMarquee;
