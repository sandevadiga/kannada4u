const events = [
    {
      "author": "ರಾಜೇಶ್ ಪಟೇಲ್",
      "event_name": "ಹಂಪಿ ಹೆರಿಟೇಜ್ ಹಬ್ಬ",
      "date": "2024-04-15",
      "expiry": "2024-04-17",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/hampi_heritage.jpg"],
      "description": "ಹಂಪಿಯ ಐತಿಹಾಸಿಕ ಸ್ಥಳಗಳನ್ನು ನೋಡಿದ್ದು, ನಿಜವಾದ ಅನುಭವಗಳನ್ನು ಪಡೆಯಿರಿ, ಜೀವನದ ಹಿರಿಯ ಹೆರಿಟೇಜ್ ಹಬ್ಬಗಳನ್ನು ಆನಂದಿಸಿ.",
      "place_district": "ಬಳ್ಳಾರಿ",
      "place_taluk": "ಹೊಸಪೇಟೆ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-03-01"
    },
    {
      "author": "ಆನನ್ಯ ಸಿಂಗ್",
      "event_name": "ಮೈಸೂರು ದಸರಾ",
      "date": "2024-10-08",
      "expiry": "2024-10-15",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/mysuru_dasara.jpg"],
      "description": "ಮೈಸೂರು ದಸರಾದ ದೊಡ್ಡ ಆಚರಣೆಯ ಸಂಭ್ರಮ, ಬಣ್ಣಬಣ್ಣದ ಪ್ರದರ್ಶನಗಳು, ಸಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಉತ್ಸಾಹದ ವಾತಾವರಣ.",
      "place_district": "ಮೈಸೂರು",
      "place_taluk": "ಮೈಸೂರು",
      "entry_fee": "ಉಚ್ಚತರ",
      "date_added": "2024-03-05"
    },
    {
      "author": "ಕಾರ್ತಿಕ್ ರೆಡ್ಡಿ",
      "event_name": "ಕೂಡಲ ಕಾಫಿ ಹಬ್ಬ",
      "date": "2024-07-20",
      "expiry": "2024-07-25",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/coorg_coffee_festival.jpg"],
      "description": "ತಾಜಾ ಕಾಫಿ ಬ್ರೂ ಮತ್ತು ಕೂಡಲ ಕಾಫಿಯ ಸಂಸ್ಕೃತಿಯನ್ನು ಆನಂದಿಸಲು ಬರುವ ವಿಶೇಷ ಹಬ್ಬ. ರುಚಿಕರವಾದ ರುಚಿಯಲ್ಲಿ ಪಾಲ್ಗೊಳ್ಳಿ, ಕಾಫಿ ಕೃಷಿ ತಲುಪಿರುವ ಮೂಲೆಯನ್ನು ನೋಡಿ.",
      "place_district": "ಕೊಡಗು",
      "place_taluk": "ಮಡಿಕೇರಿ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-03-10"
    },
    {
      "author": "ವಿನಯ ಗೌಡ",
      "event_name": "ಸಿಂಧನೂರು ಲಕ್ಷ್ಮಣ ಜಾತ್ರೆ",
      "date": "2024-07-22",
      "expiry": "2024-07-27",
      "type": "ರಥೋತ್ಸವ",
      "photos": ["https://example.com/sindhanuru_lakshman_jatre.jpg"],
      "description": "ಸಿಂಧನೂರು ಲಕ್ಷ್ಮಣ ಜಾತ್ರೆಯು ಪ್ರಾಚೀನ ಸಮಾರಂಭದ ಉತ್ಸವವಾಗಿದೆ. ಈ ಹಬ್ಬವು ಜಾತ್ರೆ, ಪರಿಚಯ ಮತ್ತು ಸಂಗೀತದ ಸಂಭ್ರಮದ ಪ್ರಮುಖ ಆಚರಣೆಯಾಗಿದೆ.",
      "place_district": "ಬಳ್ಳಾರಿ",
      "place_taluk": "ಬಳ್ಳಾರಿ",
      "entry_fee": "ಉಚ್ಚತರ",
      "date_added": "2024-03-15"
    },
    {
      "author": "ಅರ್ಜುನ್ ಪಾಟೆಲ್",
      "event_name": "ಧಾರವಾಡ ಕಾಳಬೆಟ್ಟ ಹಬ್ಬ",
      "date": "2024-05-03",
      "expiry": "2024-05-05",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/dharwad_kalaburagi_habba.jpg"],
      "description": "ಧಾರವಾಡ ಕಾಳಬೆಟ್ಟ ಹಬ್ಬದಲ್ಲಿ ಜಾತ್ರೆ, ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಸಂಗೀತ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಆಯೋಜಿಸಲಾಗುತ್ತದೆ.",
      "place_district": "ಧಾರವಾಡ",
      "place_taluk": "ಧಾರವಾಡ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-03-20"
    },
    {
      "author": "ಗಣೇಶ್ ಕುಮಾರ್",
      "event_name": "ಕರವಾರ ಸಿಂಧನೂರು ಹಬ್ಬ",
      "date": "2024-07-10",
      "expiry": "2024-07-15",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/karwar_sindhanuru_habba.jpg"],
      "description": "ಕರವಾರ ಸಿಂಧನೂರು ಹಬ್ಬದಲ್ಲಿ ರಥೋತ್ಸವ, ಜಾತ್ರೆ, ಮೆಹೆಂದಿ ಪ್ರದರ್ಶನಗಳು ಮತ್ತು ಕ್ರೀಡಾಕ್ರಿಯೆಗಳು ನಡೆಯುತ್ತವೆ.",
      "place_district": "ಉತ್ತರ ಕನ್ನಡ",
      "place_taluk": "ಕರವಾರ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-03-25"
    },
    {
      "author": "ಮೋಹನ್ ರಾವ್",
      "event_name": "ಹಸನ ಹಬ್ಬ",
      "date": "2024-04-28",
      "expiry": "2024-04-30",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/hassan_habba.jpg"],
      "description": "ಹಸನ ಹಬ್ಬದಲ್ಲಿ ಬಂಗಾರದ ಕನ್ನಡಿಗರ ಬಂಧನ, ರಥೋತ್ಸವ, ಸಂಗೀತ ಮತ್ತು ನೃತ್ಯ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನಡೆಸಲಾಗುತ್ತದೆ.",
      "place_district": "ಹಸನ",
      "place_taluk": "ಹಸನ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-01"
    },
    {
      "author": "ರಮೇಶ್ ಕುಮಾರ್",
      "event_name": "ಬಿಜಾಪುರ ಉತ್ಸವ",
      "date": "2024-06-05",
      "expiry": "2024-06-10",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/bijapur_utsava.jpg"],
      "description": "ಬಿಜಾಪುರದ ಐತಿಹಾಸಿಕ ನಗರದಲ್ಲಿ ಉತ್ಸವವನ್ನು ಆಚರಿಸಲಾಗುತ್ತದೆ. ರಥಯಾತ್ರೆ, ನಾಟಕ, ನೃತ್ಯ ಮತ್ತು ಸಂಗೀತ ಕಾರ್ಯಕ್ರಮಗಳು ನಡೆಯುತ್ತವೆ.",
      "place_district": "ಬಿಜಾಪುರ",
      "place_taluk": "ಬಿಜಾಪುರ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-05"
    },
    {
      "author": "ಲಕ್ಷ್ಮಣ್ ರಾವ್",
      "event_name": "ರಾಯಚೂರು ಹೆಮ್ಮರಿ ಹಬ್ಬ",
      "date": "2024-05-20",
      "expiry": "2024-05-23",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/raichur_hemmar_habba.jpg"],
      "description": "ರಾಯಚೂರು ಹೆಮ್ಮರಿ ಹಬ್ಬದಲ್ಲಿ ಸಂಗೀತ, ನೃತ್ಯ, ಮತ್ತು ಹಲವಾರು ರಮಣೀಯ ಕಾರ್ಯಕ್ರಮಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ.",
      "place_district": "ರಾಯಚೂರು",
      "place_taluk": "ರಾಯಚೂರು",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-10"
    },
    {
      "author": "ವಿಜಯ್ ಮಲ್ಲಿಕಾರ್ಜುನ",
      "event_name": "ಕುಡಿಗಲ್ ಹಬ್ಬ",
      "date": "2024-06-15",
      "expiry": "2024-06-18",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/kudligi_habba.jpg"],
      "description": "ಕುಡಿಗಲ್ ಹಬ್ಬದಲ್ಲಿ ಜಾತ್ರೆ, ಸಂಗೀತ ಮತ್ತು ನೃತ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ವಿಶೇಷ ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ.",
      "place_district": "ಬಳ್ಳಾರಿ",
      "place_taluk": "ಹಡಗಲಾಗೆ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-15"
    },
    {
      "author": "ರಾಹುಲ್ ಪಾಟೆಲ್",
      "event_name": "ಮಂಡ್ಯ ಮಳೆಗಾಲ ಹಬ್ಬ",
      "date": "2024-07-05",
      "expiry": "2024-07-10",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/mandya_maalage_habba.jpg"],
      "description": "ಮಂಡ್ಯ ಮಳೆಗಾಲದಲ್ಲಿ ಆಚರಿಸಲಾಗುತ್ತಿರುವ ಸಮಾರಂಭಗಳು, ಉತ್ಸವಗಳು ಮತ್ತು ಹಲವಾರು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು.",
      "place_district": "ಮಂಡ್ಯ",
      "place_taluk": "ಮಂಡ್ಯ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-20"
    },
    {
      "author": "ಸುದೀಪ್ ಗೌಡ",
      "event_name": "ಹೊಸಪೇಟೆ ಹಬ್ಬ",
      "date": "2024-06-28",
      "expiry": "2024-07-03",
      "type": "ಹಬ್ಬ",
      "photos": ["https://example.com/hosapete_habba.jpg"],
      "description": "ಹೊಸಪೇಟೆಯ ಹಬ್ಬದಲ್ಲಿ ರಥಯಾತ್ರೆ, ಕಲಾ ಮತ್ತು ಸಂಸ್ಕೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಹಲವಾರು ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ.",
      "place_district": "ಬಳ್ಳಾರಿ",
      "place_taluk": "ಹೊಸಪೇಟೆ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-25"
    },
    {
      "author": "ರವಿ ಕುಮಾರ್",
      "event_name": "ಸಿರ್ಸಿ ಜಾತ್ರೆ",
      "date": "2024-08-01",
      "expiry": "2024-08-05",
      "type": "ರಥೋತ್ಸವ",
      "photos": ["https://example.com/sirsi_jatre.jpg"],
      "description": "ಸಿರ್ಸಿ ಜಾತ್ರೆಯು ಪರಂಪರಾಗತ ಉತ್ಸವದ ಅತ್ಯುತ್ತಮ ಆಚರಣೆಗಳಲ್ಲಿ ಒಂದು. ಈ ಉತ್ಸವದಲ್ಲಿ ನಾಟಕಗಳು, ರಥಯಾತ್ರೆ ಮತ್ತು ಧಾರ್ಮಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಂಗೀತದ ಕಾರ್ಯಕ್ರಮಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ.",
      "place_district": "ಉತ್ತರ ಕನ್ನಡ",
      "place_taluk": "ಸಿರ್ಸಿ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-04-30"
    },
    {
      "author": "ಗಿರೀಶ್ ಕುಮಾರ್",
      "event_name": "ಗದಗ್ ಜಾತ್ರೆ",
      "date": "2024-08-08",
      "expiry": "2024-08-10",
      "type": "ರಥೋತ್ಸವ",
      "photos": ["https://example.com/gadag_jatre.jpg"],
      "description": "ಗದಗ್ ಜಾತ್ರೆಯು ನಡೆಯುವ ಉತ್ಸವವು ಪರಂಪರಾಗತ ಮತ್ತು ಭಕ್ತಿಪೂರ್ಣ ಆಚರಣೆಗಳಲ್ಲಿ ಒಂದು.",
      "place_district": "ಗದಗ್",
      "place_taluk": "ಗದಗ್",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-05-05"
    },
    {
      "author": "ಶಿವರಾಜ್ ಕುಮಾರ್",
      "event_name": "ಬೆಳಗಾವಿ ಕಾಗದ ಉತ್ಸವ",
      "date": "2024-08-15",
      "expiry": "2024-08-20",
      "type": "ಉತ್ಸವ",
      "photos": ["https://example.com/belagavi_paper_festival.jpg"],
      "description": "ಬೆಳಗಾವಿಯ ಪಾತ್ರೆಗಳನ್ನು ಸಂಪಾದಿಸಲು ಪ್ರಮುಖ ಹಬ್ಬ. ಈ ಉತ್ಸವದಲ್ಲಿ ಉತ್ಕೃಷ್ಟ ಸಂಗೀತ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಪ್ರದರ್ಶನಗಳು ಆಯೋಜಿಸಲಾಗುತ್ತವೆ.",
      "place_district": "ಬೆಳಗಾವಿ",
      "place_taluk": "ಬೆಳಗಾವಿ",
      "entry_fee": "ಪಾವತಿ",
      "date_added": "2024-05-10"
    }
  ];
  
  export default events;
  