import React from 'react'

export const Reads = () => {
    const cardData = [
  {
    title: "Short Story 📖",
    subtitle: "The Honest Woodcutter",
    content: `One day, a woodcutter was cutting a tree near a river. His axe slipped from his hands and fell into the water. He sat down and cried. Suddenly, a fairy appeared and offered to help.

She brought out a golden axe. “Is this yours?” she asked. The woodcutter said, “No.” She then brought out a silver axe. Again, he said, “No.” Finally, she brought out his iron axe. He smiled and said, “Yes! That’s mine.”

The fairy was pleased with his honesty and gave him all three axes. Honesty always brings rewards.`
  },
  {
    title: "Poem 🌸",
    subtitle: "A Little Smile",
    content: `A little smile, a friendly wave,  
Can brighten someone's day to save.  
It takes no coin, it costs no gold,  
But spreads warmth as stories told.  
  
So pass a smile, be kind and true,  
The joy you give comes back to you.`
  },
  {
    title: "News Update 📰",
    subtitle: "School Hosts English Language Week",
    content: `Last Monday, City School began its English Language Week with debates, spelling bees, and story competitions. 

The event aims to help students improve their English through fun and creative activities. Parents and teachers were invited to attend performances.

“It’s a great way to boost confidence and fluency,” said the principal. The week will end with an award ceremony on Friday.`
  },
  {
    title: "Article 🌍",
    subtitle: "Why Reading is Powerful",
    content: `Reading builds imagination and knowledge. When we read stories or articles, we learn about different cultures, people, and ideas.

Books help us improve our language, grammar, and writing skills. They also develop our critical thinking. Even 15 minutes of reading daily can make a big difference.

Reading is like food for the brain — the more you read, the sharper you become.`
  },
  {
    title: "Poem 🎵",
    subtitle: "Morning Sun",
    content: `The morning sun is bright and new,  
It paints the sky with golden hue.  
Birds sing songs in joyful cheer,  
To greet the day so fresh and clear.`
  },
  {
    title: "Short Story 🐾",
    subtitle: "The Lost Puppy",
    content: `Ali found a small puppy near his school. It looked scared and hungry. He gave it water and brought it home. His parents put up posters to find the owner.

After two days, a family came looking for their lost dog. They were happy and thanked Ali for his kindness.

Ali felt proud. Helping others, even animals, is a sign of a good heart.`
  },
  {
    title: "News Report 🗞️",
    subtitle: "Students Win Essay Contest",
    content: `Three students from Class 10 won the district essay writing contest. Their topics were about environmental protection, education for girls, and kindness.

The winners received medals and certificates from the local mayor. Their essays will be published in the school magazine.`
  },
  {
    title: "Article 📚",
    subtitle: "Benefits of Speaking English",
    content: `Speaking English can open doors to better jobs, travel, and education. It’s the global language for business and the internet.

When you speak English, you can communicate with people from many countries. It helps you make friends, join programs, and understand international news.

Practice daily by watching English videos, reading aloud, and talking with friends.`
  },
  {
    title: "Poem 🌼",
    subtitle: "Kind Words",
    content: `Kind words are gentle, soft and sweet,  
They make each stranger that you meet  
Feel valued, heard, and never small—  
So speak with kindness, after all.`
  },
  {
    title: "Short Story 🧒",
    subtitle: "Sara’s Speech",
    content: `Sara was shy and afraid to speak in public. But her teacher encouraged her to try. She practiced daily in front of the mirror.

On speech day, she stood up, nervous but brave. She spoke clearly and smiled. Everyone clapped.

She realized that confidence grows with practice. Now, she helps others face their fears too.`
  },
  {
    title: "Poem 🌼",
    subtitle: "Kind Words",
    content: `Kind words are gentle, soft and sweet,  
They make each stranger that you meet  
Feel valued, heard, and never small—  
So speak with kindness, after all.`
  },
  {
    title: "Short Story 🧒",
    subtitle: "Sara’s Speech",
    content: `Sara was shy and afraid to speak in public. But her teacher encouraged her to try. She practiced daily in front of the mirror.

On speech day, she stood up, nervous but brave. She spoke clearly and smiled. Everyone clapped.

She realized that confidence grows with practice. Now, she helps others face their fears too.`
  }
];

  return (
     <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 pt-24 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Start Learning English – Explore These Useful Titles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-center text-green-600 font-semibold text-lg mb-1">
                {card.title}
              </h2>
              <h3 className="text-center text-gray-800 dark:text-white font-bold text-xl mb-4">
                {card.subtitle}
              </h3>
              <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed max-h-60 overflow-y-auto pr-2 whitespace-pre-line custom-scrollbar">
                {card.content}
              </div>
            </div>
            <a
              href="#"
              className="mt-6 inline-block text-center text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 font-semibold"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
