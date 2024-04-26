import React from 'react';
import Link from 'next/link'; // Import Link from Next.js

const SecondNavBar = () => {
  return (
    <div id="scroll-container" className="mt-1 style-scope yt-chip-cloud-renderer dark:text-white" style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <div id="chips" role="tablist" className="style-scope yt-chip-cloud-renderer transform translate-x-0  mt-1">
        <div className="flex justify-center gap-2">
          <button className="px-2 py-1 md:px-4 md:py-2 dark:bg-gray-700 dark:text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/Top10">
              Top10
            </Link>
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 dark:bg-gray-700 dark:text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/events">
              Events / Functions
            </Link>
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 dark:bg-gray-700 dark:text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/biodata">
              BioData
            </Link>
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 dark:bg-gray-700 dark:text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/jobs">
              Local Jobs
            </Link>
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 dark:bg-gray-700 dark:text-white rounded-md shadow-md hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/travel">
              Travel Explore
            </Link>
          </button>

          <button className="px-2 py-1 md:px-4 md:py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/news">
              Live News
            </Link>
          </button>
          <button className="px-2 py-1 md:px-4 md:py-2 bg-white text-black rounded-md shadow-md hover:bg-gray-200 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base">
            <Link href="/goldrate-karantaka">
              Gold Price
            </Link>
          </button>
        </div>
      </div>
      <div className="absolute inset-y-0 left-0 bg-gradient-to-l from-transparent to-gray-800 w-20" />
      <div className="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-gray-800 w-20" />
    </div>
  );
};

export default SecondNavBar;
