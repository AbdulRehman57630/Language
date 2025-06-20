import React, { useState } from 'react';
import axios from 'axios';
import { FaRobot, FaCopy } from 'react-icons/fa';

const Aichat = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!question.trim()) return;

    const currentQuestion = question; // Save before clearing
    const userMessage = { text: currentQuestion, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBKqC3-JdSNxSVwwHuZK7HiVov-7oMTDx8',
        {
          contents: [{ parts: [{ text: currentQuestion }] }],
        }
      );

      console.log('Response:', response.data);

      const aiText =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        '⚠️ Sorry, I could not understand that.';

      const aiMessage = { text: aiText, sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Error fetching AI response:', err.response?.data || err.message);
      setMessages((prev) => [
        ...prev,
        { text: '❌ Failed to get answer. Please try again.', sender: 'ai' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-black dark:bg-gray-900  dark:text-white bg-gray-200 flex flex-col items-center px-4 py-8 relative">
      <div className="relative z-10 w-full flex flex-col items-center shadow-black ">
       

        <div className="w-full max-w-2xl flex flex-col justify-between h-[80vh] sm:h-[70vh] dark:bg-gray-900  dark:text-white  border rounded-xl shadow-xl overflow-hidden mt-20">
          <FaRobot className="text-green-400 text-5xl  mt-5 mx-auto" />
        <h1 className="font-semibold text-3xl sm:text-4xl mb-4 mx-auto gap-2">
         
          AI Chatbot 
        </h1> <hr className='border-t-4 border-gray-800 '/>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 dark:bg-gray-900  dark:text-white">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`relative group max-w-[90%] px-4 py-2 text-sm break-words rounded-xl ${
                  msg.sender === 'user'
                    ? 'bg-gray-300 self-end'
                    : 'bg-gray-100 text-black self-start'
                }`}
              >
                {msg.text}
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => copyToClipboard(msg.text)}
                    className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-black p-1"
                    title="Copy to clipboard"
                  >
                    <FaCopy size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="p-3 border-t dark:bg-gray-900  dark:text-white flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Ask with your Aziz friend"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full sm:flex-1 px-4 py-2 border border-gray-500 text-black text-bold rounded-full text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-gray-300"
              onKeyDown={(e) => e.key === 'Enter' && generateAnswer()}
            />
            <button
              onClick={generateAnswer}
              disabled={loading}
              className={`w-full sm:w-auto px-4 py-2 ${
                loading ? 'bg-gray-600' : 'bg-black'
              } text-white text-sm font-semibold rounded-full shadow-md hover:bg-gray-800`}
            >
              {loading ? 'Thinking...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aichat;
