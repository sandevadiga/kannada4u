import { newsData } from '../../../data/NewsData';
import firebase from '../../../config/firebase';



async function addData() {
  const db = firebase.firestore();

  for (let newsItem of newsData) {
    await db.collection('news').doc(newsItem.id.toString()).set(newsItem);
  }

  console.log('Data added successfully!');
}

addData().catch(console.error);
