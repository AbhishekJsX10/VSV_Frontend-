import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaSearch, FaEnvelope } from "react-icons/fa";
import { useModal } from '../context/ModalContext';

const Footer = () => {
  const { openModal } = useModal();

  return (
    <footer className="bg-black text-white py-8 relative w-full px-5">
      <div className="container mx-auto px-4">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-8">
          {/* Logo */}
          <div className="text-xl font-normal">
            VSV
          </div>

          {/* Navigation Links */}
          <div className="flex mt-1 gap-2 sm:gap-5 lg:gap-0 lg:flex-col  ml-0 md:ml-[10rem] lg:ml-[35rem]">
            <Link to="/about" className="text-sm lg:text-lg hover:text-gray-300">About </Link>
            <Link to="/join" className="text-sm lg:text-lg hover:text-gray-300">Join</Link>
            <Link to="/contact" className="text-sm lg:text-lg hover:text-gray-300">Contact Us</Link>
          </div>
          
          {/* Icons */}
          <div className="flex mt-1 space-x-4">
            {/* <FaSearch className="text-sm sm:text-lg cursor-pointer hover:text-gray-300" /> */}
            <FaEnvelope 
              className="text-sm sm:text-lg cursor-pointer hover:text-gray-300" 
              onClick={openModal}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-2 gap-8 relative z-10">
          {/* Left Section */}
          <div className="space-y-2 ">
            <div>
              <h2 className="text-sm md:text-xl font-normal mb-2">About Us</h2>
              <p className="text-gray-300 max-w-[16rem] text-[0.75rem] sm:text-sm">
                VSV Communication is one of the India's leading project development and construction groups. We are active in Delhi NCR region
              </p>
            </div>
            <div className="space-y-2 pt-24 flex min-w-[18rem] items-center sm:items-start sm:flex-col ">
              <Link to="/" className="block text-xl mx-4 sm:mx-0 mt-1 sm:mt-0 font-normal">Our Projects</Link>
              <Link to="/" className="block text-xl font-normal">Our Blogs</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="space-y-6 ml-0 md:ml-[9rem] mt-10 ">
            <div>
              <h2 className="text-sm md:text-xl font-normal mb-2">Contact Us</h2>
              <p className="text-gray-300 max-w-[12rem] text-[0.75rem] sm:text-sm">
                Third Floor Plot No- 107, Sect-23, Dwarka, Ph-2<br />
                Pocket-10, Block - B, New Delhi-110077
              </p>
            </div>
          </div>
        </div>

        {/* Large VSV Communications Watermark */}
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-10 text-center pointer-events-none  md:mt-[0rem]">
          <div className="text-[2.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[9.5rem] font-medium">VSV</div>
          <div className="text-[2.5rem] sm:text-[5rem] md:text-[5.5rem] lg:text-[7rem] xl:text-[9.5rem] mt-[-2rem] sm:mt-[-3.15rem] md:mt-[-3.15rem] lg:mt-[-5.5rem] xl:mt-[-5.5rem] font-medium">Communications</div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex justify-between items-start">
          {/* Social Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Socials</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right space-y-2">
            <p className="text-gray-300">Contact Us: +91-7503387171</p>
            <a href="https://maps.app.goo.gl/KUW1TRTnH48uRSPj6" className="block text-xl font-medium">
              Office Directions
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t text-center border-gray-800 text-sm text-gray-400">
          <p>
            2024 VSV Communication | {'  '}
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link> {' '}
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;