import React from 'react';
import StateNavBar from './StateNavBar';
import SecondNavBar from './SecondNavBar';
import Link from 'next/link';

function NaavBar() {
  return (
    <div className="flex flex-col text-center sticky top-0 z-30 bg-gray-800 text-white py-1 px-2">
        <Link href="/" className="font-bold mb-2">
          <span className="text-lg md:text-xl ">Kannada4U</span>.com
        </Link>
      <StateNavBar />
      <SecondNavBar />
      <h1>This apge Under Developement Mode</h1>
    </div>
  );
}

export default NaavBar;
