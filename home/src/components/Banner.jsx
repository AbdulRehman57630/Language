import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center  justify-between min-h-[calc(100vh-100px)] bg-gradient-to-br dark:from-gray-900  dark:to-gray-900 px-6 py-12 mt-20 shadow-lg transition-colors duration-300">
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left lg:ml-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Master English with Ease
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Interactive lessons, vocabulary builders, and grammar guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            <Link to="/corses">Start Learning Now</Link> 
          </button>
          <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
           <Link to="/corses">Explore Courses</Link> 
          </button>
        </div>
      </div>

      {/* Emoji/Image Section */}
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <div className="text-[6rem] md:text-[8rem] drop-shadow-lg "><img src="lear.avif" className='rounded-full w-3/4 mx-auto transform hover:scale-[1.02] hover:shadow-green-500/40 transition duration-300' style={{ boxShadow: '20 20px 20px rgba(34,197,94,0.4)'  }} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;
