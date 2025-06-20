import React from 'react'

const Picban = () => {
  return (
   <div className="w-full min-h-[calc(100vh-100px)] dark:bg-gray-900  dark:text-white shadow-sm flex flex-col lg:flex-row">

        {/*picture side*/}
        <div className='w-3/4 pl-20 pt-5'>
        <img src="eng.png" className='mt-20 w-full ' alt="" />
        </div>
        {/*picture side*/}
        <div className="w-full px-4 py-8 max-w-5xl mx-auto ">
  {/* Hero Section */}
  <section className="text-center mb-10">
    <h1 className="text-4xl font-bold mb-4">Welcome to Fluent English</h1>
    <p className="text-lg ">
      Learn to speak, write, and understand English with confidence. Whether you're a beginner or improving your skills, we’ve got the right resources for you.
    </p>
  </section>

  {/* Why Learn English */}
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-3">Why Learn English?</h2>
    <p className="">
      English is the global language of communication, business, and education. Mastering English opens up countless opportunities around the world in education, travel, and your career.
    </p>
  </section>

  {/* Our Features */}
  <section className="mb-10">
    <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
    <ul className="list-disc list-inside  space-y-2">
      <li>Step-by-step grammar lessons for all levels</li>
      <li>Vocabulary-building exercises and quizzes</li>
      <li>Spoken English practice with real-life examples</li>
      <li>Writing improvement tools and tips</li>
      <li>Interactive video lessons and worksheets</li>
    </ul>
  </section>
 <section className="text-center mt-12">
    <h2 className="text-2xl font-semibold mb-3">Start Learning Today</h2>
    <p className=" mb-6">
      Join thousands of learners from around the world. Improve your English and reach your goals faster.
    </p>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
      Get Started Now
    </button>
  </section>
</div>

    </div>
  )
}

export default Picban