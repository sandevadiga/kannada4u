// pages/biography.js

import React from 'react';
import { biographies } from '../data/biograhies'; // Assuming you've stored the JSON data in a file named biographies.js

export default function BiographyPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 text-black">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Biography Page</h1>

        {/* Iterate over each biography */}
        {Object.values(biographies).map(biography => (
          <div key={biography.name} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{biography.name}</h2>
            <p className="text-lg font-medium mb-2">{biography.occupation}</p>
            <p className="text-lg mb-2">Date of Birth: {biography.dateOfBirth}</p>
            <p className="text-lg mb-2">Place of Birth: {biography.placeOfBirth}</p>
            <p className="text-lg mb-4">Nationality: {biography.nationality}</p>

            <p className="text-lg mb-4">{biography.biography}</p>

            {/* Display photos */}
            <div className="flex flex-wrap mb-4">
              {biography.photos.map((photo, index) => (
                <img key={index} src={photo} alt={`Photo ${index + 1}`} className="w-32 h-32 object-cover mr-2 mb-2" />
              ))}
            </div>

            {/* Display videos */}
            <div className="flex flex-wrap mb-4">
              {biography.videos.map((video, index) => (
                <video key={index} controls className="w-64 h-48 mr-2 mb-2">
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>

            {/* Display quotes */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quotes</h3>
              <ul className="list-disc pl-8">
                {biography.quotes.map((quote, index) => (
                  <li key={index} className="text-lg mb-2">"{quote}"</li>
                ))}
              </ul>
            </div>

            {/* Display legacy */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Legacy</h3>
              <p className="text-lg">{biography.legacy}</p>
            </div>

            {/* Display references */}
            <div>
              <h3 className="text-lg font-semibold mb-2">References</h3>
              <ul className="list-disc pl-8">
                {biography.references.map((reference, index) => (
                  <li key={index} className="text-lg mb-2">{reference}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
