'use client'
import { useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import { firebaseApp } from '../../../firebase' // Import your Firebase app

import { newsData } from '../../data/NewsData';

const UploadPage = () => {
  const handleUpload = async () => {
    const db = getFirestore(firebaseApp); // Get Firestore instance

    for (let newsItem of newsData) {
      await addDoc(collection(db, 'dailynews'), newsItem); // Add the document to the 'dailynews' collection
    }

    console.log('Data added successfully!');
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <button onClick={handleUpload}>Upload Data</button>
    </div>
  );
};

export default UploadPage;
