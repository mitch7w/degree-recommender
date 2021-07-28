import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
    apiKey: "AIzaSyCkTIDtUjOHPgUsp0jjZiQ5q_EhFbXItUc",
    authDomain: "degree-recommender.firebaseapp.com",
    projectId: "degree-recommender",
    storageBucket: "degree-recommender.appspot.com",
    messagingSenderId: "15881084955",
    appId: "1:15881084955:web:72fae7e09ba1496d9e58be",
    measurementId: "G-RXZD2VJXBV"
  };

  const firebaseApp = firebase.initializeApp(config) ;

  const db = firebaseApp.firestore() ;
  const degreeCollection = db.collection('degrees') ;

  export const createDegree = degree => {
      return degreeCollection.add(degree) ;
  }

  export const getDegree = async degreeName => {
      const query = degreeCollection.where('degreeName', '==', degreeName);
      const res = await query.get();
      res.forEach(doc => {
        console.log(doc.id, ' => ', doc.data());
      });
  }