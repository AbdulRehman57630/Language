import React, { useState, useEffect } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/video', label: 'Videos' },
    { path: '/ai-chat', label: 'AI Chatbot' },
    { path: '/read', label: 'Read' },
  ];

  return (
    <div className="w-full flex justify-center h-full items-center  pt-4">
      <nav className="w-[95%] md:w-[85%] lg:w-4/5 fixed top-4 z-50 bg-white dark:bg-gray-900 shadow-md rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-300">
        <div className="px-6 h-20 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 font-extrabold text-2xl sm:text-3xl tracking-tight hover:scale-105 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-green-500 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
            Study<span className="text-black dark:text-white">Web</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-lg">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <li className="list-none text-gray-800 dark:text-white hover:text-green-500 transition-colors">{link.label}</li>
              </Link>
            ))}

            <Link to="/register">
              <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition duration-200">
                Register
              </button>
            </Link>

            <Link to="/login">
              <button className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition duration-200">
                Login
              </button>
            </Link>

            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-800 dark:text-yellow-300 hover:scale-110 transition"
              title="Toggle Theme"
            >
              {darkMode ? <BsSun /> : <BsMoonStars />}
            </button>
          </div>

          {/* Mobile: Theme Toggle + Menu Icon */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-2xl text-gray-800 dark:text-yellow-300 hover:scale-110 transition"
              title="Toggle Theme"
            >
              {darkMode ? <BsSun /> : <BsMoonStars />}
            </button>

            <button
              className="text-3xl text-gray-800 dark:text-white hover:scale-105 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiMenu3Line />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-white dark:bg-gray-800 text-center w-full p-6 space-y-4 font-bold shadow-md rounded-b-3xl transition-all duration-300">
            {links.map((link) => (
              <Link key={link.path} to={link.path}>
                <li
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 dark:text-white hover:text-green-500"
                >
                  {link.label}
                </li>
              </Link>
            ))}

            <Link to="/register">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-4 mt-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition duration-200"
              >
                Sign Up
              </button>
            </Link>

            <Link to="/login">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-2 px-4 mt-4 bg-green-500 hover:bg-green-600 text-white rounded-md font-semibold transition duration-200"
              >
                Login
              </button>
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
