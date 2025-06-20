import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/students/login', formData);
      alert(res.data.message);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br gap-4 flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-900">
      <div className=" p-10 rounded-2xl  bg-gray-100 border border-green-300 dark:bg-gray-900 shadow-xl w-full max-w-md transition transform hover:scale-[1.01] duration-300">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-gray-800 dark:text-white mb-6">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border bg-gray-100 dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-800 dark:text-white text-sm mt-6">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
      <div className="hidden sm:flex bg-white rounded-2xl  shadow-xl p-6 w-full max-w-md items-center justify-center transition transform hover:scale-[1.01] duration-300">
          <img
            src="/sign.jpg" // Make sure 'sign.jpg' is inside your public folder
            alt="Sign Up"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
    </div>
  );
};

export default Login;
