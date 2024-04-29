'use client'

import React, { useState } from 'react';
import { journylist } from '../data/journylist'; // Update the path to your journylist file

export default function Journey() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter function to match the search query
  const filteredJourneys = Object.values(journylist).filter(journey =>
    journey.routes[0].origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    journey.routes[0].destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8 text-black">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Journey List</h1>

        {/* Search box */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Find Route"
            className="border border-gray-300 rounded-md py-2 px-4 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-2">Top 10 Journey Lists</h1>
          <ul className="list-disc pl-4">
            {filteredJourneys.map(journey => (
              <li key={journey.routes[0].routeID} className="text-lg mb-2">
                <a href={`#journey-${journey.routes[0].routeID}`}>{journey.routes[0].origin} to {journey.routes[0].destination}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Iterate over each journey */}
        {filteredJourneys.map(journey => (
          <div key={journey.routes[0].routeID} className="mb-8" id={`journey-${journey.routes[0].routeID}`} style={{ paddingTop: '100px' }}>
            {/* Routes */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <h2 className="bg-gray-800 text-white text-lg font-semibold p-4">Route</h2>
              <div className="p-4">
                <p className="text-lg font-semibold">Origin: {journey.routes[0].origin}</p>
                <p className="text-lg">Destination: {journey.routes[0].destination}</p>
                <p className="text-lg">Distance: {journey.routes[0].distance}</p>
                <p className="text-lg">Duration: {journey.routes[0].duration}</p>
              </div>
            </div>

            {/* Transportation Modes */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <h2 className="bg-gray-800 text-white text-lg font-semibold p-4">Transportation Modes</h2>
              <ul className="divide-y divide-gray-300">
                {journey.transportationModes.map(mode => (
                  <li key={mode.modeID} className="p-4">
                    <p className="text-lg font-semibold">{mode.mode}</p>
                    <p className="text-lg">{mode.description}</p>
                    <img src={mode.examplePhoto} alt={`Example of ${mode.mode}`} className="mt-4 rounded-lg shadow-md" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <h2 className="bg-gray-800 text-white text-lg font-semibold p-4">Highlights</h2>
              <ul className="divide-y divide-gray-300">
                {journey.highlights.map(highlight => (
                  <li key={highlight.highlightID} className="p-4">
                    <p className="text-lg font-semibold">{highlight.name}</p>
                    <p className="text-lg">{highlight.description}</p>
                    <img src={highlight.examplePhoto} alt={`Example of ${highlight.name}`} className="mt-4 rounded-lg shadow-md" />
                    <h3 className="text-lg font-semibold mt-4">Nearby Places</h3>
                    <ul className="list-disc pl-8">
                      {highlight.nearbyPlaces.map(place => (
                        <li key={place} className="text-lg">{place}</li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold mt-4">Destination Places</h3>
                    <ul className="list-disc pl-8">
                      {highlight.destinationPlaces.map(destPlace => (
                        <li key={destPlace.placeName} className="text-lg">
                          <p className="font-semibold">{destPlace.placeName}</p>
                          <p>{destPlace.description}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <h2 className="bg-gray-800 text-white text-lg font-semibold p-4">Tips</h2>
              <ul className="divide-y divide-gray-300">
                {journey.tips.map(tip => (
                  <li key={tip.tipID} className="p-4">
                    <p className="text-lg font-semibold">{tip.tip}</p>
                    <p className="text-lg">{tip.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
