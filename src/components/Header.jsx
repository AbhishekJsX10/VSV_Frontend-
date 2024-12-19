import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";
import LogoImage from '../assets/LOGO2.webp';
import { useModal } from '../context/ModalContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Only hide header after scrolling past its height (57px)
      if (currentScrollPos > 57) {
        setIsVisible(isScrollingUp);
        if (!isScrollingUp) {
          setIsDrawerOpen(false); // Close drawer when header hides
        }
      } else {
        setIsVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Navigation Links Data
  const navLinks = [
    { name: 'About Us', path: '/about', icon: <AiOutlineHome className="text-[1.3rem]" /> },
    { name: 'Services', path: '/services', icon: <MdMiscellaneousServices className="text-[1.3rem]" /> },
  ];

  // Mobile-only Links
  const mobileLinks = [
    // { name: 'Search', icon: <IoIosSearch className="text-[1.3rem]" /> },
    { 
      name: 'Mail', 
      icon: <IoMailSharp className="text-[1.3rem]" />,
      onClick: () => {
        openModal();
        setIsDrawerOpen(false);
      }
    },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-3 bg-transparent backdrop-blur-md border-b border-white/10 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <Link to="/">
          <div className="text-xl font-bold mix-blend-difference">
            <LazyLoadImage
              src={LogoImage}
              alt="VSV Logo"
              className="h-[2rem] sm:h-[3rem] w-auto mix-blend-difference"
              effect="blur"
              placeholderSrc={LogoImage}
            />
          </div>
        </Link>

        <div className="flex justify-center items-center mix-blend-difference">
          <RxHamburgerMenu 
            className="text-xl cursor-pointer text-black hover:text-zinc-700 transition-colors" 
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
        </div>

        <div className="hidden md:flex items-center gap-6 mix-blend-difference">
          <IoMailSharp 
            className="text-[1.3rem] cursor-pointer text-black hover:text-zinc-700 transition-colors"
            onClick={openModal}
          />
        </div>
      </nav>

      <div 
        className={`fixed left-0 right-0 top-[57px] bg-transparent backdrop-blur-md border-b border-white/10 transform transition-all duration-300 ease-in-out ${
          isDrawerOpen && isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } z-40`}
      >
        <div className="p-6">
          <div className="flex flex-col items-center gap-4">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className="w-full flex items-center justify-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-200 text-white"
                onClick={() => setIsDrawerOpen(false)}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            ))}

            <div className="w-full md:hidden">
              {mobileLinks.map((link, index) => (
                <div 
                  key={index}
                  className="w-full flex items-center justify-center gap-3 cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-all duration-200 text-white mb-4"
                  onClick={link.onClick}
                >
                  {link.icon}
                  <span className="font-medium">{link.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {isDrawerOpen && isVisible && (
        <div 
          className="fixed inset-0 top-[57px] bg-black/20 backdrop-blur-sm z-30 transition-all duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  )
}

export default Header