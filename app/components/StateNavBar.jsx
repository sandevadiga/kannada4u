import React from 'react';
import Link from 'next/link';

const KarnatakaDistricts = {
    "ಬಾಗಲಕೋಟೆ": "Bagalkot",
    "ಬಳ್ಳಾರಿ": "Ballari",
    "ಬೆಳಗಾವಿ": "Belagavi",
    "ಬೆಂಗಳೂರು": "Bengaluru",
    "ಬಿದರ್": "Bidar",
    "ಚಾಮರಾಜನಗರ": "Chamarajanagar",
    "ಚಿಕ್ಕಮಗಳೂರು": "Chikkamagaluru",
    "ಚಿತ್ರದುರ್ಗ": "Chitradurga",
    "ದಕ್ಷಿಣ_ಕನ್ನಡ": "Dakshina_Kannada",
    "ದಾವಣಗೆರೆ": "Davangere",
    "ಧಾರವಾಡ": "Dharwad",
    "ಗದಗ್": "Gadag",
    "ಹಾಸನ": "Hassan",
    "ಹಾವೇರಿ": "Haveri",
    "ಗುಲ್ಬರ್ಗಾ": "Gulbarga",
    "ಕೊಡಗು": "Kodagu",
    "ಕೋಲಾರ": "Kolar",
    "ಕೊಪ್ಪಲ್": "Koppal",
    "ಮಂಡ್ಯ": "Mandya",
    "ಮೈಸೂರು": "Mysuru",
    "ರಾಯಚೂರು": "Raichur",
    "ರಾಮನಗರ": "Ramanagara",
    "ಶಿವಮೊಗ್ಗ": "Shivamogga",
    "ತುಮಕೂರು": "Tumakuru",
    "ಉಡುಪಿ": "Udupi",
    "ಉತ್ತರ_ಕನ್ನಡ": "Uttara_Kannada",
    "ಬಿಜಾಪುರ": "Bijapur",
    "ಯಾದಗಿರ್": "Yadgir",
    "ಚಿಕ್ಕಬಳ್ಳಾಪುರ": "Chikkaballapura"
  };
  

const StateNavBar = () => {
  const districtNames = Object.keys(KarnatakaDistricts);

    return (
        <div id="scroll-container" className="style-scope yt-chip-cloud-renderer " style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div id="chips" role="tablist" className="style-scope yt-chip-cloud-renderer transform translate-x-0  " style={{ animation: 'scroll 30s linear infinite' }}>
                <div className="flex justify-start gap-2 ">
                <div style={{ width: '10px' }}></div>
                    {districtNames.map((district, index) => (
                        <Link
                            key={index}
                            className="px-3 py-0.5 md:px-4 md:py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base"
                       href={`/news/${KarnatakaDistricts[district]}`}
                       >
                            {district}
                        </Link>
                    ))}
                     <div style={{ width: '10px' ,marginRight: '30px',visibility: 'hidden'}}>a</div>
                </div>
            </div>
            <div className="absolute inset-y-0 left-0 bg-gradient-to-l from-transparent to-gray-800 w-10 md:w-20 overflow-hidden z-10" />
            <div className="absolute inset-y-0 right-0 bg-gradient-to-r from-transparent to-gray-800 w-10 md:w-20 overflow-hidden z-10" />
        </div>
    );
};

export default StateNavBar;



