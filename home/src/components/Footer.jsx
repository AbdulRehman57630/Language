
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side - site name or logo */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold">🌐 YourLanguageSite</h2>
          <p className="text-sm text-gray-400">Learn English from Beginner to Advanced</p>
        </div>

       
       
        {/* Right side - copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} YourLanguageSite. All rights reserved.
          <div className="mt-5  flex justify-center gap-10 text-lg">
          <FaLinkedin className="hover:text-green-500 cursor-pointer" />
          <FaFacebook className="hover:text-green-500 cursor-pointer" />
          <PiInstagramLogoFill  className="hover:text-green-500 cursor-pointer" />
          <FaTwitter className="hover:text-green-500 cursor-pointer"  />
          </div>
 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
