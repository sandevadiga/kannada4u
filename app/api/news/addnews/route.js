// import { newsData } from '../../../data/NewsData';
// import {db} from '../../../config/firebase'



// async function addData() {
//   // const db = firebase.firestore();

//   for (let newsItem of newsData) {
//     await db.collection('news').doc(newsItem.id.toString()).set(newsItem);
//   }

//   console.log('Data added successfully!');
// }

// addData().catch(console.error);


// Import the necessary modules
import { newsData } from '../../../data/NewsData';
import db from '../../../config/firebaseAdmin'; // Adjust the path as needed

// Function to add data to Firestore
async function addData() {
  try {
    // Loop through each news item and add it to the 'news' collection
    for (let newsItem of newsData) {
      await db.collection('news').doc(newsItem.id.toString()).set(newsItem);
    }

    console.log('Data added successfully!');
  } catch (error) {
    console.error('Error adding data:', error);
  }
}

// Call the function to add data (you might want to call this in a separate script)
addData();
