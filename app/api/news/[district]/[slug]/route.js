import db from '../../../../config/firebaseAdmin';

export const GET = async (req, res) => {
  try {
    const BlogID = req.headers.get('BlogID');

    // Check if BlogID is provided
    if (!BlogID) {
      return new Response('BlogID is required', { status: 400 });
    }

    const docRef = db.collection('dailynews').doc(BlogID);
    const docSnap = await docRef.get();

    // Check if document exists
    if (!docSnap.exists) {
      return new Response('Resource not found', { status: 404 });
    }

    const news = docSnap.data();
    return new Response(JSON.stringify(news), { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response('Internal server error', { status: 500 });
  }
};
