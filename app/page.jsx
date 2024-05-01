
import { newsData } from './data/NewsData';  
import Link from 'next/link'; // Import Link from Next.js
import React from 'react';


// const getdata = async () => {
//   const response = await fetch('https://kannada4u.com/api/news');
//   const data = await response.json();
//   console.log(data);
//   return data;
// };


const HomePage =  async () => {

// const newsDatas = await  getdata();

  
// console.log(newsDatas);

  const sortedNews = newsData.sort((a, b) => b.views - a.views);

  const categoryColors = {
    'breaking news': 'bg-red-500 text-white',
    'sports': 'bg-blue-500 text-white',
    'politics': 'bg-indigo-500 text-white',
    'entertainment': 'bg-purple-500 text-white',
    'business': 'bg-yellow-500 text-black',
    'health': 'bg-green-500 text-white',
    'technology': 'bg-teal-500 text-white',
    'science': 'bg-cyan-500 text-white',
    'fashion': 'bg-orange-500 text-white',
    'education': 'bg-lime-500 text-black',
    'environment': 'bg-gray-500 text-white',
    'travel': 'bg-pink-500 text-white',
    'opinion': 'bg-orange-600 text-white',
    'culture': 'bg-blue-gray-500 text-white',
    'weather': 'bg-yellow-400 text-black',
    'food': 'bg-red-600 text-white',
    'fitness': 'bg-green-600 text-white',
    'art': 'bg-yellow-600 text-black',
  };


  const getCategoryTagColor = (category) => {
    const colorClass = categoryColors[category] || 'bg-gray-500 text-white';
    return `inline-block px-2 py-1 mb-2 rounded ${colorClass}`;
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 dark:text-white">
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedNews.map((article, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded shadow-md">
              <Link
                href={ `/news/${article.districtEn}/${article.title}/`}
                passHref
              >
                {/* Pass the article ID and headline to create a SEO-friendly URL */}
                
                  <span className={`inline-block px-2 py-1 mb-2 rounded ${getCategoryTagColor(article.category)}`}>
                    {article.category}
                  </span>
                  {article.photos.length > 0 && (
                    <div className="mb-4">
                      <img src={article.photos[0]} alt="News" className="w-full h-48 object-cover rounded" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{article.headlines}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{article.article.substring(0, 100)}...</p>
                  <p className="text-gray-500 dark:text-gray-400">District: {article.district}</p>
                  <p className="text-gray-500 dark:text-gray-400">Author: {article.author}</p>
                  <p className="text-gray-500 dark:text-gray-400">Views: {article.views}</p>

              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
