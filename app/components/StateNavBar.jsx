import React from 'react';

const KarnatakaDistricts = [
  "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru Rural",
  "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)",
  "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan",
  "Haveri", "Kalaburagi (Gulbarga)", "Kodagu (Coorg)", "Kolar", "Koppal", "Mandya",
  "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)",
  "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir", "Chikkaballapura"
];

const StateNavBar = () => {
  return (
    <div className={`bg-gray-200 dark:bg-gray-800 px-4 whitespace-nowrap overflow-x-auto scrollbar-hidden`}>
      <div className="flex" style={{ marginRight: '-20px' }}>
        {KarnatakaDistricts.map((district, index) => (
          <div key={index} className="py-1 px-2 bg-gray-300 dark:bg-gray-700 rounded-md mr-2">{district}</div>
        ))}
      </div>
    </div>
  );
};

export default StateNavBar;
