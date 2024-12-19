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
  const [bottomCards, setBottomCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}${ENDPOINTS.RECENT_UPDATES}`);
        setMainUpdates(response.data.mainUpdates);
        setBottomCards(response.data.bottomCards);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
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