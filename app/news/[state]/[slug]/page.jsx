"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { newsData } from '../../../data/NewsData';

const ArticlePage = () => {

  const { id } = 5; // Access the article ID from router.query
  const [article, setArticle] = useState(newsData[5]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Fetch the article based on the ID from the query parameters
    if (id) {
      const articleId = parseInt(id);
      const foundArticle = newsData.find(item => item.id === articleId);
      setArticle(foundArticle);
    }
  }, [id]); // Trigger the effect whenever the ID changes

  useEffect(() => {
    // Automatically transition to the next image after 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % article.photos.length);
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts or when article changes
    return () => clearInterval(interval);
  }, [article.photos.length]); // Trigger the effect whenever the length of photos array changes

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-800 dark:text-white">
      {article ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{article.headlines}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-500 mr-2">{article.date}</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500 ml-2">{article.category}</span>
          </div>
          <div className="relative h-48">
            <img src={article.photos[currentImageIndex]} alt={article.headlines} className="w-full h-full object-cover rounded" />
          </div>
          <p className="mt-8">{article.article}</p>
          <div className="flex items-center mt-8">
            <p className="text-gray-500">Author: {article.author}</p>
            <span className="mx-4 text-gray-500">|</span>
            <p className="text-gray-500">Views: {article.views}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticlePage;


