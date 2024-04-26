import React from 'react';
import goldAndSilverPrices from '../data/goldrate';

const Page = () => {
  const { gold, silver } = goldAndSilverPrices;

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100  mt-3">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Gold and Silver Prices in Karnataka</h1>
      
      {/* Today's Prices */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Today's Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Gold Price</h3>
            <p className="text-gray-800 dark:text-gray-200">{gold.today_price}</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Silver Price</h3>
            <p className="text-gray-800 dark:text-gray-200">{silver.today_price}</p>
          </div>
        </div>
      </div>

      {/* Weekly Data */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Weekly Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Gold Weekly Data</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {gold.weekly_data.map(item => (
                  <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Silver Weekly Data</h3>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {silver.weekly_data.map(item => (
                  <tr key={item.date}>
                    <td>{item.date}</td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Lowest and Highest Prices */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Lowest and Highest Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Gold</h3>
            <p className="text-gray-800 dark:text-gray-200">Lowest Price: {gold.lowest_price} ({gold.lowest_price_date})</p>
            <p className="text-gray-800 dark:text-gray-200">Highest Price: {gold.highest_price} ({gold.highest_price_date})</p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Silver</h3>
            <p className="text-gray-800 dark:text-gray-200">Lowest Price: {silver.lowest_price} ({silver.lowest_price_date})</p>
            <p className="text-gray-800 dark:text-gray-200">Highest Price: {silver.highest_price} ({silver.highest_price_date})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
