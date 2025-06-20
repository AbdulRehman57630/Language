import React, { useState } from "react";

const vocabularyData = [
  {
    word: "Beginner",
    definition: "Existing in large quantities.",
    sentence: "The garden was abundant with colorful flowers.",
  },
  {
    word: "Level One",
    definition: "Eager to know or learn something.",
    sentence: "She was curious about how stars are formed.",
  },
  {
    word: "Level Two",
    definition: "Performing tasks in the best possible manner.",
    sentence: "The new engine is much more efficient than the old one.",
  },
  {
    word: "Level Three",
    definition: "Consistently good in quality or performance.",
    sentence: "He is a reliable friend who always helps in need.",
  },
  {
    word: "Level Four",
    definition: "Feeling or showing thanks.",
    sentence: "I'm very grateful for your support during my exams.",
  },
  {
    word: "Level Advanced",
    definition: "Feeling or showing thanks.",
    sentence: "I'm very grateful for your support during my exams.",
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="p-6 max-w-6xl mx-auto mt-20 dark:bg-gray-900  dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-400 ">
        English Courses Beginner to Advanced
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vocabularyData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {item.word}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 italic mb-1">
              {item.definition}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              <span className="font-medium">Example:</span> {item.sentence}
            </p>

            <button
              className="mt-auto border-2 border-green-400 py-2 px-4 rounded-md hover:bg-green-400 hover:text-white font-medium transition-colors duration-300"
              onClick={() => setSelectedCourse(selectedCourse === item ? null : item)} // toggle open/close
            >
              Start {item.word}
            </button>

            {/* Show selected course info only inside this card */}
            {selectedCourse === item && (
              <div className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-lg text-black dark:text-white">
                <h3 className="font-bold mb-2">You Selected: {item.word}</h3>
                <p className="mb-1">
                  <strong>Definition:</strong> {item.definition}
                </p>
                <p>
                  <strong>Example:</strong> {item.sentence}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
