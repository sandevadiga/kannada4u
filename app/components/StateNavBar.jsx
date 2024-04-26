import React from 'react';

const StateNavBar = () => {
    const KarnatakaDistricts = [
        "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru Rural",
        "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)",
        "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan",
        "Haveri", "Kalaburagi (Gulbarga)", "Kodagu (Coorg)", "Kolar", "Koppal", "Mandya",
        "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)",
        "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir", "Chikkaballapura"
    ];

    return (
        <div id="scroll-container" className="style-scope yt-chip-cloud-renderer " style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div id="chips" role="tablist" className="style-scope yt-chip-cloud-renderer transform translate-x-0  " style={{ animation: 'scroll 30s linear infinite' }}>
                <div className="flex justify-start gap-2 ">
                    {KarnatakaDistricts.map((district, index) => (
                        <button
                            key={index}
                            className="px-2 py-1 md:px-4 md:py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base"
                        >
                            {district}
                        </button>
                    ))}
                </div>
            </div>
            <div className="absolute inset-y-0 left-0 bg-gradient-to-l from-transparent to-gray-800 w-10 md:w-20 overflow-hidden" />
            <div className="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-gray-800 w-10 md:w-20 overflow-hidden" />
        </div>
    );
};

export default StateNavBar;
