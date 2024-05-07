import db from '../../../config/firebaseAdmin'


export const GET = async (req,res) => {
  const BlogID = 'il565dlEZCLnJii9XhXG'; 


  const district = req.headers.get('district');
  


const KarnatakaDistricts = {
  "Bagalkot": "ಬಾಗಲಕೋಟೆ",
  "Ballari": "ಬಳ್ಳಾರಿ",
  "Belagavi": "ಬೆಳಗಾವಿ",
  "Bengaluru": "ಬೆಂಗಳೂರು",
  "Bidar": "ಬಿದರ್",
  "Chamarajanagar": "ಚಾಮರಾಜನಗರ",
  "Chikkamagaluru": "ಚಿಕ್ಕಮಗಳೂರು",
  "Chitradurga": "ಚಿತ್ರದುರ್ಗ",
  "Dakshina_Kannada": "ದಕ್ಷಿಣ_ಕನ್ನಡ",
  "Davangere": "ದಾವಣಗೆರೆ",
  "Dharwad": "ಧಾರವಾಡ",
  "Gadag": "ಗದಗ್",
  "Hassan": "ಹಾಸನ",
  "Haveri": "ಹಾವೇರಿ",
  "Gulbarga": "ಗುಲ್ಬರ್ಗಾ",
  "Kodagu": "ಕೊಡಗು",
  "Kolar": "ಕೋಲಾರ",
  "Koppal": "ಕೊಪ್ಪಲ್",
  "Mandya": "ಮಂಡ್ಯ",
  "Mysuru": "ಮೈಸೂರು",
  "Raichur": "ರಾಯಚೂರು",
  "Ramanagara": "ರಾಮನಗರ",
  "Shivamogga": "ಶಿವಮೊಗ್ಗ",
  "Tumakuru": "ತುಮಕೂರು",
  "Udupi": "ಉಡುಪಿ",
  "Uttara_Kannada": "ಉತ್ತರ_ಕನ್ನಡ",
  "Bijapur": "ಬಿಜಾಪುರ",
  "Yadgir": "ಯಾದಗಿರ್",
  "Chikkaballapura": "ಚಿಕ್ಕಬಳ್ಳಾಪುರ"
};
 
const kannadadistrict = KarnatakaDistricts[district];

  if (req.method === 'GET') {

    const snapshot = await db.collection('dailynews').where('district', '==', kannadadistrict).get();
    const news = [];
    snapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });

     return new Response(JSON.stringify(news), { status: 200 })
    // return res.status(200).json(news);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
