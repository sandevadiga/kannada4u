'use client'

import React, { useState } from 'react';
import dummyJobs from '../data/jobs'; // Import dummy job data

const JobsPage = () => {
  // Group jobs by date and month
  const [groupedJobs, setGroupedJobs] = useState(() => {
    const grouped = {};
    dummyJobs.forEach(job => {
      const date = new Date(job.datePosted);
      const month = date.toLocaleString('default', { month: 'long' });
      const day = date.getDate();
      if (!grouped[month]) {
        grouped[month] = {};
      }
      if (!grouped[month][day]) {
        grouped[month][day] = [];
      }
      grouped[month][day].push(job);
    });
    return grouped;
  });

  const handleFilterMonth = month => {
    const filteredJobs = {};
    if (month === 'All') {
      setGroupedJobs(groupedJobs);
    } else {
      Object.entries(groupedJobs).forEach(([m, days]) => {
        if (m === month) {
          filteredJobs[m] = days;
        }
      });
      setGroupedJobs(filteredJobs);
    }
  };

  const handleFilterDay = (month, day) => {
    const filteredJobs = {};
    Object.entries(groupedJobs).forEach(([m, days]) => {
      if (m === month) {
        Object.entries(days).forEach(([d, jobs]) => {
          if (parseInt(d) === day) {
            filteredJobs[m] = { [d]: jobs };
          }
        });
      }
    });
    setGroupedJobs(filteredJobs);
  };

  const resetFilters = () => {
    setGroupedJobs(() => {
      const grouped = {};
      dummyJobs.forEach(job => {
        const date = new Date(job.datePosted);
        const month = date.toLocaleString('default', { month: 'long' });
        const day = date.getDate();
        if (!grouped[month]) {
          grouped[month] = {};
        }
        if (!grouped[month][day]) {
          grouped[month][day] = [];
        }
        grouped[month][day].push(job);
      });
      return grouped;
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-black">
      <h1 className="text-3xl font-semibold text-center mb-6">Job Listings</h1>
      <div className="flex justify-between items-center mb-6">
        <button onClick={resetFilters} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Reset Filters</button>
        <select onChange={e => handleFilterMonth(e.target.value)} className="border border-gray-300 rounded-md py-2 px-">
          <option value="All">All Months</option>
          {Object.keys(groupedJobs).map(month => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {Object.entries(groupedJobs).map(([month, days]) => (
          <div key={month}>
            <h2 className="text-2xl font-semibold mb-4">{month}</h2>
            {Object.entries(days).map(([day, jobs]) => (
              <div key={day}>
                <h3 className="text-xl font-semibold mb-2 text-white">{month} {day}</h3>
                {jobs.map(job => (
                  <div key={job.id} className="bg-white shadow-md rounded-md p-6 mb-4 flex flex-col items-center">
                    <h4 className="text-xl font-semibold mb-2">{job.jobTitle}</h4>
                    <p><strong>Company:</strong> {job.companyName}</p>
                    <p><strong>District:</strong> {job.district}</p>
                    <p><strong>Address:</strong> {job.address}</p>
                    <p><strong>Number of Positions:</strong> {job.numberOfPositions}</p>
                    <p><strong>Skills Required:</strong> {job.skillsRequired.join(', ')}</p>
                    <p><strong>Salary:</strong> {job.salary}</p>
                    <p><strong>Date Posted:</strong> {job.datePosted}</p>
                    <p><strong>Expiry Date:</strong> {job.expiryDate}</p>
                    {job.website && <p><strong>Website:</strong> <a href={job.website} target="_blank" rel="noopener noreferrer">{job.website}</a></p>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
