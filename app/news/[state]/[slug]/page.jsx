const getdata = async (docID, distric,baseURL) => {
  const response = await fetch(`${baseURL}/api/news/${distric}/${docID}`, {
    method: 'GET',
    headers: {
      BlogID : docID
    }},  { cache: 'no-store' });
  const data = await response.json();
  return data;
};

const getSuggestedArticles = async (state,baseURL) => {
  const response = await fetch(`${baseURL}/api/news/${state}`, {
    method: 'GET',
  }, { cache: 'no-store' });
  const data = await response.json();
  return data;
};

const timestampToDate = (timestamp) => {
  return timestamp;
};

const ArticlePage = async ({ params }) => {

  const baseURL =process.env.BASE_URL; 

  const docID = getID(params.slug);
  const distric = params.state;

  function getID(slug) {
    let decodedStr = decodeURIComponent(slug);
    let parts = decodedStr.split(/&|=/);
    return parts[2];
  }

  const article = await getdata(docID, distric,baseURL);
  article.date = timestampToDate(article.date);

  const suggestedArticles = await getSuggestedArticles(distric);

  console.log(article)
  console.log(suggestedArticles)

  return (
    <div className="container mx-auto px-4 py-8 dark:bg-gray-800 dark:text-white">
      {article ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{article.headlines}</h1>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">|</span>
            <span className="text-gray-500 ml-2">{article.category}</span>
          </div>
          <div className="relative h-48">
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
                <img className="w-full h-64 object-cover" src={suggestedArticle.image} alt={suggestedArticle.headlines} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{suggestedArticle.headlines}</div>
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
