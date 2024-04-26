import React from 'react';

const StateNavBar = () => {
    // const KarnatakaDistricts = [
    //     "Bagalkot", "Ballari (Bellary)", "Belagavi (Belgaum)", "Bengaluru Rural",
    //     "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru (Chikmagalur)",
    //     "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan",
    //     "Haveri", "Kalaburagi (Gulbarga)", "Kodagu (Coorg)", "Kolar", "Koppal", "Mandya",
    //     "Mysuru (Mysore)", "Raichur", "Ramanagara", "Shivamogga (Shimoga)", "Tumakuru (Tumkur)",
    //     "Udupi", "Uttara Kannada (Karwar)", "Vijayapura (Bijapur)", "Yadgir", "Chikkaballapura"
    // ];
    const KarnatakaDistricts = [
    "ಬಾಗಲಕೋಟೆ", "ಬಳ್ಳಾರಿ (ಬೆಳ್ಳಾರಿ)", "ಬೆಳಗಾವಿ (ಬೆಳಗಾಂ)", "ಬೆಂಗಳೂರು ಗ್ರಾಮೀಣ",
    "ಬೆಂಗಳೂರು ನಗರ", "ಬಿದರ್", "ಚಾಮರಾಜನಗರ", "ಚಿಕ್ಬಲ್ಲಾಪುರ", "ಚಿಕ್ಕಮಗಳೂರು (ಚಿಕ್ಮಗಳೂರು)",
    "ಚಿತ್ರದುರ್ಗ", "ದಕ್ಷಿಣ ಕನ್ನಡ", "ದಾವಣಗೆರೆ", "ಧಾರವಾಡ", "ಗದಗ್", "ಹಾಸನ",
    "ಹಾವೇರಿ", "ಕಲಬುರಗಿ (ಗುಲ್ಬರ್ಗಾ)", "ಕೊಡಗು (ಕೂರ್ಗ್)", "ಕೋಲಾರ", "ಕೊಪ್ಪಲ್", "ಮಂಡ್ಯ",
    "ಮೈಸೂರು (ಮೈಸೂರು)", "ರಾಯಚೂರು", "ರಾಮನಗರ", "ಶಿವಮೊಗ್ಗ (ಶಿಮೊಗ್ಗ)", "ತುಮಕೂರು (ತುಮಕೂರು)",
    "ಉಡುಪಿ", "ಉತ್ತರ ಕನ್ನಡ (ಕರವಾರ)", "ವಿಜಯಪುರ (ಬಿಜಾಪುರ)", "ಯಾದಗಿರ್", "ಚಿಕ್ಕಬಲ್ಲಾಪುರ"
];

    return (
        <div id="scroll-container" className="style-scope yt-chip-cloud-renderer " style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div id="chips" role="tablist" className="style-scope yt-chip-cloud-renderer transform translate-x-0  " style={{ animation: 'scroll 30s linear infinite' }}>
                <div className="flex justify-start gap-2 ">
                <div style={{ width: '10px' }}></div>
                    {KarnatakaDistricts.map((district, index) => (
                        <button
                            key={index}
                            className="px-3 py-0.5 md:px-4 md:py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 text-sm md:text-base"
                        >
                            {district}
                        </button>
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
