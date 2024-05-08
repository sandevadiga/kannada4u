// import ShareButton from '../../../components/Buttons/ShareButton'
// import ShareButtonFacebook from '../../../components/Buttons/ShareButtonFacebook'
import ShareButtonWhatsApp from '../../../components/Buttons/ShareButtonWhatsApp'

const getdata = async (docID, district, baseURL) => {
  const response = await fetch(`${baseURL}/api/news/${district}/${docID}`, {
    method: 'GET',
    headers: {
      BlogID: docID
    }
  }, { cache: 'no-store' });
  const data = await response.json();
  return data;
};


const getSuggestedArticles = async (district, baseURL) => {
  const response = await fetch(`${baseURL}/api/news/${district}`, {
    method: 'GET',
    headers: {
      district: district
    }
  }, { cache: 'no-store' });

  const data = await response.json();
  return data;
};


const timestampToDate = (timestamp) => {
  // Check if timestamp is a Firestore Timestamp object
  if (timestamp && timestamp._seconds && timestamp._nanoseconds) {
    const date = new Date(timestamp._seconds * 1000); // Convert seconds to milliseconds
    return date.toLocaleString(); // Convert to local date time format
  } else {
    return timestamp; // If not a Firestore Timestamp, return as is
  }
};

const ArticlePage = async ({ params }) => {

  const baseURL = process.env.BASE_URL;
  console.log(baseURL)

  const docID = getID(params.slug);

  const district = params.district;

  function getID(slug) {
    let decodedStr = decodeURIComponent(slug);
    let parts = decodedStr.split(/&|=/);
    return parts[2];
  }

  const article = await getdata(docID, district, baseURL);
  article.date = timestampToDate(article.date);

  const suggestedArticles = await getSuggestedArticles(district, baseURL);

  console.log(article)
  console.log(suggestedArticles)

  return (
    <div className=" relative container mx-auto px-4 py-2 dark:bg-gray-800 dark:text-white">
      {article ? (
        <>
          <div className="flex flex-col justify-between group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-2xl font-bold mb-4">{article.headline}</h1>
          </div>
<div className="flex items-center mb-4">
  <span className="text-gray-500">|</span>
  <span className="text-gray-500 ml-2">{article.category}</span>
  <span className="text-gray-500">|</span>
  <span className="text-gray-500 ml-2">{article.date}</span>
  <span className="text-gray-500">|</span>
  <ShareButtonWhatsApp url= {`https://www.kannada4u.com/news/${article.districtEn}/${article.title}&id=${docID}`} style="ml-auto w-7" />
</div>

          <div className="relative h-48 justify-center flex center">
            <img src={article.photos[0]} alt="News" className="w-1/2 sm:w-full h-48 object-cover rounded center" />
          </div>
          <p className="mt-8">{article.article}</p>
          <div className="flex items-center mt-8">
            <p className="text-gray-500">Author: {article.author}</p>
            <span className="mx-4 text-gray-500">|</span>
            <p className="text-gray-500">Views: {article.views}</p>
          </div>
          <h2 className="text-xl font-bold mt-8">Suggested Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {suggestedArticles.map((suggestedArticle, index) => (
              <div key={index} className="rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800">
                <img className="w-full h-64 object-cover" src={suggestedArticle.photos[0]} alt={suggestedArticle.headline} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{suggestedArticle.headline}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};



export default ArticlePage;
