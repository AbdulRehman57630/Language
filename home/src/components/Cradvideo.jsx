import React from 'react';

const videos = [
  {
    src: "https://www.youtube.com/embed/YVGUG-G_dMw",
    title: "Basic English Conversation",
    desc: "Learn how to start a conversation in English.",
  },
  {
    src: "https://www.youtube.com/embed/QvGhYX9Boas",
    title: "Common English Phrases",
    desc: "Useful phrases for daily English speaking.",
  },
  {
    src: "https://www.youtube.com/embed/rCH5nwC5sIs",
    title: "English Listening Practice",
    desc: "Improve your listening skills with real examples.",
  },
];

const Cradvideo = () => {
  return (
    <div className=" bg-gradient-to-br text-green-400 dark:bg-gray-900  dark:text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-10 drop-shadow-lg ">
        Watch English Learning Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/10 transform hover:scale-[1.02] hover:shadow-green-500/40 transition duration-300"
          >
            <iframe
              className="w-full h-60 rounded-t-3xl"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-5 ">
              <h3 className="text-xl font-semibold">👂{video.title}</h3>
              <p className="text-sm  mt-2">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cradvideo;
