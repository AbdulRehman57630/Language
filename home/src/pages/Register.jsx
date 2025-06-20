import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    country: '',
    phone: '',
    education: '',
    englishGoal: '',
    learningStyle: '',
    level: 'Pre Beginning',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/students/signup', formData);
      alert(res.data.message || 'Signup successful');
      navigate('/');
    } catch (err) {
      
      alert(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className=" rounded-2xl shadow-lg mt-20 w-full max-w-2xl p-6 sm:p-8 border border-green-300 bg-gray-100 dark:bg-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center  text-gray-800 dark:text-white mb-6">
          Register Your Form
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-100 dark:bg-gray-900 ">
          <div className="sm:col-span-2">
            <input 
              type="text" 
              name="name" 
              placeholder="Full Name" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div className="sm:col-span-2">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div className="sm:col-span-2">
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <input 
              type="number" 
              name="age" 
              placeholder="Age" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <select 
              name="gender" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div>
            <input 
              type="text" 
              name="country" 
              placeholder="Country" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <input 
              type="text" 
              name="phone" 
              placeholder="Phone Number" 
              onChange={handleChange} 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <input 
              type="text" 
              name="education" 
              placeholder="Education" 
              onChange={handleChange} 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div>
            <select 
              name="level" 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-2 border border-gray-300 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="Pre Beginning">Pre Beginning</option>
              <option value="Beginning">Beginning</option>
              <option value="Level One">Level One</option>
              <option value="Level Two">Level Two</option>
              <option value="Level Three">Level Three</option>
              <option value="Level Four">Level Four</option>
              <option value="Level Five">Level Five</option>
              <option value="Advance">Advance</option>
            </select>
          </div>
          
          <div className="sm:col-span-2">
            <input 
              type="text" 
              name="englishGoal" 
              placeholder="Why you want to learn English?" 
              onChange={handleChange} 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div className="sm:col-span-2">
            <input 
              type="text" 
              name="learningStyle" 
              placeholder="Preferred Learning Style" 
              onChange={handleChange} 
              className="w-full px-4 py-2 border bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" 
            />
          </div>
          
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full bg-green-600  hover:bg-green-700  text-white font-semibold py-3 rounded-lg transition duration-200 mt-2"
            >
             Register
            </button>
          </div>
        </form>

        <p className="text-center text-gray-800 dark:text-white text-sm mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;