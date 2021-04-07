import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq_kG3xSdfTegq91KDHFK88BRJcBQ7vsE",
  authDomain: "todo-doc.firebaseapp.com",
  databaseURL: "https://todo-doc-default-rtdb.firebaseio.com",
  projectId: "todo-doc",
  storageBucket: "todo-doc.appspot.com",
  messagingSenderId: "941930004162",
  appId: "1:941930004162:web:252b1bcab4ec957d2f855b",
  measurementId: "G-1N73J9N1DV"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;