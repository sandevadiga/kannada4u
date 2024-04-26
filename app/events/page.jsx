// EventsPage.js

import React from 'react';
import eventsData from '../data/events'; // Assuming events.js is in the correct relative path

const EventsPage = () => {
  // Group events by month
  const eventsByMonth = eventsData.reduce((acc, event) => {
    const monthYear = event.date.slice(0, 7); // Extracting year and month (YYYY-MM)
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(event);
    return acc;
  }, {});

  return (
    <div className="container mx-auto px-4 py-8">
      {Object.entries(eventsByMonth).map(([monthYear, events]) => (
        <div key={monthYear} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{formatMonthYear(monthYear)}</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div key={index} className="p-5 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <time className="text-lg font-semibold text-gray-900 dark:text-white">{formatDate(event.date)}</time>
                <div className="mt-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.event_name}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{event.description}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Location: {event.place_taluk}, {event.place_district}</p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Entry Fee: {event.entry_fee}</p>
                  <div className="flex justify-between items-center mt-4">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Learn More</a>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Added on: {event.date_added}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to format month and year
const formatMonthYear = (monthYear) => {
  const [year, month] = monthYear.split('-');
  const monthsMap = [
    'ಜನವರಿ', 'ಫೆಬ್ರವರಿ', 'ಮಾರ್ಚ್', 'ಏಪ್ರಿಲ್', 'ಮೇ', 'ಜೂನ್', 'ಜುಲೈ', 'ಆಗಸ್ಟ್', 'ಸೆಪ್ಟೆಂಬರ್', 'ಅಕ್ಟೋಬರ್', 'ನವೆಂಬರ್', 'ಡಿಸೆಂಬರ್'
  ];
  return `${monthsMap[parseInt(month) - 1]} ${year}`;
};

// Helper function to format date (e.g., 2024-07-20 to July 20, 2024)
const formatDate = (date) => {
  const [year, month, day] = date.split('-');
  const monthsMap = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return `${monthsMap[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
};

export default EventsPage;
