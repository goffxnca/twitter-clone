import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkDB_PRmNIulYGlk2HnRVn13x_ZrPEAAo",
  authDomain: "twitter-clone-50729.firebaseapp.com",
  databaseURL: "https://twitter-clone-50729.firebaseio.com",
  projectId: "twitter-clone-50729",
  storageBucket: "twitter-clone-50729.appspot.com",
  messagingSenderId: "208351005978",
  appId: "1:208351005978:web:7db4666373601b7a98b0a3",
};

const firebaseWebApp = firebase.initializeApp(firebaseConfig);
const db = firebaseWebApp.firestore();
export default db;
