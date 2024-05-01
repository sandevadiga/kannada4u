import db from '../../config/firebaseAdmin'; // adjust the path as needed



export const GET = async (req,res) => {
  if (req.method === 'GET') {
    let news = [];
    const snapshot = await db.collection('dailynews').get();
    snapshot.forEach((doc) => {
      news.push({ id: doc.id, ...doc.data() });
    });
    // res.status(200).json(news);
    return new Response(JSON.stringify(news), { status: 200 })
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
