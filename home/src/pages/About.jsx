import React from "react";

const About = () => {
  return (
    <div className=" min-h-screen dark:bg-gray-900  dark:text-white py-16 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto  mt-20">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-center mb-10 ">
          We are dedicated to helping you become a confident English speaker.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="e2.jpg" // Replace with your image
              alt="Learn English"
              className="rounded-xl shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why Learn With Us?
            </h2>
            <p className="mb-3">
              Our platform is designed for learners of all levels. Whether
              you're a beginner or looking to improve your fluency, we offer
              high-quality lessons, practice activities, and real-life examples.
            </p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Interactive video lessons</li>
              <li>Real-world speaking practice</li>
              <li>Certified instructors</li>
              <li>Flexible learning at your pace</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2 ">
            Join thousands of students around the world!
          </h3>
          <p>
            Let's make learning English fun, practical, and effective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
