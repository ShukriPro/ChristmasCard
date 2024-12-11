import React, { useEffect } from 'react';
import Timer from './Timer';
import db from './firebaseConfig';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

function App() {
  useEffect(() => {
    const writeToFirestore = async () => {
      try {
        const isoDate = new Date().toISOString(); // Get current date in ISO format
        const docRef = doc(db, "marina", isoDate); // Use ISO string as document ID
        await setDoc(docRef, { timestamp: serverTimestamp() });
      } catch (error) {
        console.error("Error writing to Firestore: ", error);
      }
    };

    writeToFirestore();
  }, []);

  return <Timer />;
}

export default App;
