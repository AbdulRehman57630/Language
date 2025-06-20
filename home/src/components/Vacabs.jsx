// VocabularyList.jsx
import React from "react";

const vocabularyData = [
  {
    word: "Abundant",
    definition: "Existing in large quantities.",
    sentence: "The garden was abundant with colorful flowers.",
  },
  {
    word: "Curious",
    definition: "Eager to know or learn something.",
    sentence: "She was curious about how stars are formed.",
  },
  {
    word: "Efficient",
    definition: "Performing tasks in the best possible manner.",
    sentence: "The new engine is much more efficient than the old one.",
  },
  {
    word: "Reliable",
    definition: "Consistently good in quality or performance.",
    sentence: "He is a reliable friend who always helps in need.",
  },
  {
    word: "Grateful",
    definition: "Feeling or showing thanks.",
    sentence: "I’m very grateful for your support during my exams.",
  },
    {
    word: "Grateful",
    definition: "Feeling or showing thanks.",
    sentence: "I’m very grateful for your support during my exams.",
  },
];

const VocabularyList = () => {
  return (
    <div className="p-6 w-full mx-auto min-h-[calc(100vh-100px)] dark:bg-gray-900  dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-400 dark:bg-gray-900   dark:text-white">
        English Vocabulary Practice
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {vocabularyData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {item.word}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 italic mb-1">
              {item.definition}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              <span className="font-medium">Example:</span> {item.sentence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VocabularyList;
