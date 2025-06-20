import React, { useState } from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate()

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/contactus/contact' , formData);
      alert(res.data.message || 'Contact successfully');
      navigate('/')

    } catch (error) {
      alert(error.response?.data?.message || 'contact failed')
    }
    

  };

  return (
    <div className="min-h-screen bg-gradient-to-br   dark:to-gray-900 dark:text-white flex items-center justify-center px-4 pt-20">
      <div className="w-full max-w-4xl mt-14 bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-10 border border-green-400 grid md:grid-cols-2 gap-8">
        
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold mb-4">Contact Information</h2>
          <div className="flex items-start gap-3">
            <User className="text-green-600 mt-1" />
            <div>
              <span className="font-semibold">Name:</span> Abdul Aziz Yousufzai
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-green-600 mt-1" />
            <div>
              <span className="font-semibold">Email:</span> AbdulAzizYousufzai22@gmail.com
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-green-600 mt-1" />
            <div>
              <span className="font-semibold">Phone:</span> 0384-8773737
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-green-600 mt-1" />
            <div>
              <span className="font-semibold">Location:</span> Mera Nakah
            </div>
          </div>

          <a
            href="https://wa.me/923848773737"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A11.94 11.94 0 0012 0a12 12 0 00-10.35 17.85L0 24l6.43-1.69A12 12 0 1012 0c2.59 0 5.03.84 7.02 2.43.53.45.59 1.24.1 1.76l-2.6 2.6c-.4.4-1.03.44-1.49.11A6.99 6.99 0 0012 4.5a7 7 0 00-7 7c0 1.6.52 3.08 1.42 4.28.26.34.3.79.1 1.16l-.9 1.76 1.93-.52c.34-.09.71-.03 1.01.16a7.01 7.01 0 003.46.91c3.87 0 7-3.13 7-7 0-1.76-.64-3.38-1.71-4.64-.37-.43-.33-1.07.1-1.45l2.58-2.61c.48-.48.47-1.26-.01-1.74z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="space-y-5 ">
          <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>

          {success && <p className="text-green-600">Your message has been sent!</p>}

          <div className='pr-4'>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4  py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className='pr-4'>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        <div className='pr-4'>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
