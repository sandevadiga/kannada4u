import db from '../../../../config/firebaseAdmin'


export const GET = async (req,res) => {


  // const BlogID = 'il565dlEZCLnJii9XhXG'; 
  const BlogID = req.headers.get('BlogID')

  if (req.method === 'GET') {


    const docRef = db.collection('dailynews').doc(BlogID);
    const docSnap = await docRef.get();
    const news = docSnap.data(); 

    return new Response(JSON.stringify(news), { status: 200 })
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
