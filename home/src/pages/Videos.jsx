import React from 'react';

const videoData = [
  {
    src: "https://www.youtube.com/embed/YVGUG-G_dMw",
    title: "Basic English Conversation",
    desc: "Learn how to start a conversation in English."
  },
  {
    src: "https://www.youtube.com/embed/QvGhYX9Boas",
    title: "Common English Phrases",
    desc: "Useful phrases for daily English speaking."
  },
  {
    src: "https://www.youtube.com/embed/rCH5nwC5sIs",
    title: "English Listening Practice",
    desc: "Improve your listening skills with real examples."
  },
];

// Repeat the data to fill more cards (optional)
const repeatedVideos = Array(4).fill(videoData).flat();

const Cradvideo = () => {
  return (
    <div className="bg-gradient-to-b dark:bg-gray-900  dark:text-white text-green-400 min-h-screen mt-20  px-6 py-10">
      <h1 className="text-center text-4xl font-extrabold text-green-400 mb-10 drop-shadow-md">
        Watch The English Videos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repeatedVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-green-500/30"
          >
            <iframe
              className="w-full h-60"
              src={video.src}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-lg font-bold">{video.title}</h3>
              <p className="text-sm mt-2 ">{video.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cradvideo;
