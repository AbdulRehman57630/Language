import React, { useState } from "react";

const SpeakingPractice = () => {
  const [text, setText] = useState("");

  const speak = () => {
    if (typeof window !== "undefined" && text.trim()) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-20 bg-white dark:bg-gray-800 rounded-2xl shadow-md text-center">
      <h2 className="text-2xl font-bold text-green-500 dark:text-white mb-4">
        🎙️ Speaking Practice
      </h2>
      <input
        type="text"
        placeholder="Type a sentence..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white"
      />
      <button
        onClick={speak}
        className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        🔊 Speak
      </button>
    </div>
  );
};

export default SpeakingPractice;
