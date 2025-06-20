import React from 'react';

const Cards = () => {
  const cardData = [
    {
      title: "Start Articles 🌍",
      subtitle: "The Importance of Learning English",
      content: `English is one of the most widely spoken languages in the world. It is used in many countries for communication, business, travel, and education. Learning English can open the door to many opportunities.

Today, many international websites, books, and movies are in English. If you know the language, you can enjoy these without needing translation. English also helps you connect with people from other countries and cultures.

In schools and universities, English is often the language of science and technology. Many students learn it to study abroad or to improve their future careers.

In short, learning English is a smart choice. It helps you grow, learn new things, and connect with the world.`
    },
    {
      title: "English Story 🌟",
      subtitle: "The Importance of Learning English",
      content: `English is one of the most widely spoken languages in the world. It is used in many countries for communication, business, travel, and education. Learning English can open the door to many opportunities.

Today, many international websites, books, and movies are in English. If you know the language, you can enjoy these without needing translation. English also helps you connect with people from other countries and cultures.

In schools and universities, English is often the language of science and technology. Many students learn it to study abroad or to improve their future careers.

In short, learning English is a smart choice. It helps you grow, learn new things, and connect with the world.`
    },
    {
      title: "Start Articles 🌍",
      subtitle: "The Brave Little Lion",
      content: `Kindness is one of the simplest but most powerful ways to make the world a better place. It doesn’t require any special skills or wealth—just a good heart and a willingness to help others.

One day, a young girl saw an old man struggling to carry his groceries. Without thinking twice, she ran to him and offered to help. The old man smiled and thanked her, saying, "You’ve made my day better."

Another time, a little boy gave his sandwich to a hungry dog outside his school. His classmates noticed and started bringing extra snacks to share with stray animals too.

Kindness has the power to create a ripple effect. It spreads joy and positivity, making the world a little brighter every day.

Whether it’s helping a neighbor, being polite, or just smiling at someone — small acts of kindness matter. And just like the brave little lion who stood up for his friends, you too can make a big difference with a kind heart.`
    }
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 px-4 sm:px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Start Learning English – Explore These Useful Titles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-center text-green-600 font-semibold text-lg mb-1">
                {card.title}
              </h2>
              <h3 className="text-center text-gray-800 dark:text-white font-bold text-xl mb-4">
                {card.subtitle}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {card.content}
              </p>
            </div>
            <a
              href="#"
              className="mt-6 text-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-semibold"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
