import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MarqueeSection from './MarqueeSection';
import { API_BASE_URL, ENDPOINTS } from '../config/api';

const UpdateCard = ({ 
  date, 
  title, 
  description, 
  image, 
  percentage, 
  isBlack = false, 
  isFirstRow = false 
}) => {
    return (
      <div className="relative w-full h-full">
        <div className={`absolute inset-0 rounded-lg ${!isBlack && 'bg-gradient-to-br from-[#fff] to-[#E5E5E5]'} p-[1px]`}>
          <div className={`
            ${isBlack ? "bg-black" : "bg-[#C7C8C4]"} 
            rounded-lg h-full p-[1rem] 
            flex flex-col
          `}>
            {image && (
              <div className="mb-3">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full rounded-lg object-cover h-[15rem]"
                />
              </div>
            )}

            <div className="flex-grow flex flex-col">
              {date && (
                <p className={`
                  text-xs 
                  ${isBlack ? "text-white" : "text-black"} 
                  mb-2
                `}>
                  {date}
                </p>
              )}
  
              <h3 className={`
                font-bold 
                text-sm md:text-[1.4rem]
                mb-2 
                leading-tight
                ${isBlack ? "text-white" : "text-black"}
              `}>
                {title}
              </h3>
  
              {description && (
                <p className={`
                  text-xs md:text-sm 
                  mb-3
                  ${isBlack ? "text-white/80" : "text-black/80"}
                `}>
                  {description}
                </p>
              )}
              
              {percentage && (
                <p className="
                  text-green-500 
                  text-xs md:text-lg
                  font-medium 
                  mb-2
                ">
                  {percentage}%
                </p>
              )}
              
              <div className="mt-auto">
                <button className={`
                  px-4 py-2 
                  rounded-lg 
                  text-xs 
                  font-semibold 
                  transition-all 
                  duration-300
                  inline-block
                  ${isBlack 
                    ? "bg-white text-black hover:bg-gray-200" 
                    : "bg-black text-white hover:bg-gray-800"}
                `}>
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

const RecentUpdates = () => {
  const [mainUpdates, setMainUpdates] = useState([]);
  const [mainUpdatesAuto, setMainUpdatesAuto] = useState( [
    {
        date: "January 5, 2025",
        title: "Pioneering Telecom Excellence",
        description: "With 19+ years of experience, VS&V delivers innovative telecom solutions across India and Nepal, trusted by global leaders like Huawei and Smarttel.",
        image: "https://media.licdn.com/dms/image/v2/D5622AQGPfbqYP0JLVw/feedshare-shrink_2048_1536/B56ZQpIoqoG8As-/0/1735856918218?e=1738800000&v=beta&t=s5vr5Locc7q51PIyf31mwQoG_z-JNG1u2YxfDmLjmco",
        isFirstRow: true
    },
    {
        date: "January 8, 2025",
        title: "Innovating at New Heights",
        description: "VS&V creates functional and inspiring interiors, setting new standards in design and craftsmanship.",
        image:"https://media.licdn.com/dms/image/v2/D5622AQEL_FK8PkM8ww/feedshare-shrink_1280/B56ZQpIoq3HoAk-/0/1735856917964?e=1738800000&v=beta&t=ykfUo_SjJ1CBCRqAlx29bNxEvVZC2yp9Ely_IA833AM",
        isBlack: true
    },
    {
        date: "January 12, 2025",
        title: "Sustainability in Modern Construction",
        image: "https://media.licdn.com/dms/image/v2/D5622AQGxod-Y1pmOnA/feedshare-shrink_2048_1536/B56ZQpIop9GsAo-/0/1735856918314?e=1738800000&v=beta&t=azl96EvrL9YGLz9RF1TG8s7uLJ7eJYfDMu0BMSTDuR4",
        description: "VS&V excels in challenging terrains, exemplified by projects like Mount Gauri Shankar Base."
    }
]);
  const [bottomCards, setBottomCards] = useState([]);
  const [bottomCardsAuto, setBottomCardsAuto] = useState([
    {
        type: "About",
        date: "January 15, 2025",
        title: "Fostering Team Spirit",
        image: "https://media.licdn.com/dms/image/v2/D5622AQG_0joR4-CW8g/feedshare-shrink_2048_1536/B56ZQpIoqqHIAs-/0/1735856918153?e=1738800000&v=beta&t=heXD2cFJjvZ5NC3CgCFG343Et5M-dxF6s9xy8OFlSdg",
        description: "VS&V promotes teamwork and morale through events like our Annual Meeting, building a culture of excellence."
    },
    {
        type: "Services",
        date: "January 20, 2025",
        title: "Building the Future",
        image: "https://media.licdn.com/dms/image/v2/D5622AQHjRrlCv_dMwQ/feedshare-shrink_2048_1536/B56ZQpIoqrGQAo-/0/1735856918401?e=1738800000&v=beta&t=gr4yunr89XMZqPw2rbbdQtD-gPDQpwZeiDKQt4-_IOw",
        description: "VS&V is shaping skylines with innovative construction and telecom infrastructure projects.",
        isBlack: true
    },
    {
        type: "Post",
        date: "January 25, 2025",
        title: "Certified for Excellence",
        image: "https://media.licdn.com/dms/image/v2/D5622AQGSAPXuMBjPQQ/feedshare-shrink_2048_1536/B56ZQpIoq9HIA0-/0/1735856918007?e=1738800000&v=beta&t=LOS-Banvyr2DJ8EWj3DD9Fts-dqIDe502EHsY1iDNx0",
        description: "Our ISO certifications reflect our dedication to quality and safety in every project."
    },
    {
        type: "Projects",
        date: "January 30, 2025",
        title: "Introducing the VS&V Group",
        image: "https://media.licdn.com/dms/image/v2/D5622AQFCSN7GoXBWSw/feedshare-shrink_2048_1536/B56ZQpIoqhGQAo-/0/1735856920140?e=1738800000&v=beta&t=McBl0o3Heg9RXig0kf2KtlXh_ReayHtf4qfk6BFJz8A",
        description: "VS&V Group combines expertise from Communication and Techno Engineering for greater impact and growth.",
        isBlack: true
    }
]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.RECENT_UPDATES}`);
        // setMainUpdates(response.data.mainUpdates);
        // setBottomCards(response.data.bottomCards);
        setMainUpdates(mainUpdatesAuto);
        setBottomCards(bottomCardsAuto);
        setLoading(false);
      } catch (err) {
        setMainUpdates(mainUpdatesAuto);
        setBottomCards(bottomCardsAuto);
      }
    };

    fetchUpdates();
  }, []);

  if (loading) return <div className="w-full bg-[#C7C8C4] px-4 md:px-8 lg:px-16 py-10 text-center">Loading...</div>;
  if (error) return <div className="w-full bg-[#C7C8C4] px-4 md:px-8 lg:px-16 py-10 text-center text-red-500">Error: {error}</div>;

  return (
    <>
    <div className="w-full bg-[#C7C8C4] px-4 md:px-8 lg:px-16  pt-[3rem] md:py-10 rounded-t-[1rem] md:rounded-t-[3rem]">
      <h2 className="text-[2.1rem] md:text-[2.5rem] lg:text-[3rem] text-center font-bold mb-[3rem]">
        Recent Updates
      </h2>
      
      {/* Top Section */}
      <div className="flex flex-col gap-2 md:gap-4 mb-2">
        {/* First card taking full width */}
        {mainUpdates.length > 0 && (
          <div className="w-full h-[450px]">
            <UpdateCard {...mainUpdates[0]} />
          </div>
        )}
        
        {/* Remaining cards in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {mainUpdates.slice(1).map((update, index) => (
            <div key={index} className="md:col-span-1 lg:col-span-2 h-[450px]">
              <UpdateCard {...update} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {bottomCards.map((card, index) => (
          <div key={index} className="h-[500px]">
            <UpdateCard {...card} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default RecentUpdates;