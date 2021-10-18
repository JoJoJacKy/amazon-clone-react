import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1PdagHKv5ANs9nAr2tynJXqwfRWIA_2o",
  authDomain: "clone-703a1.firebaseapp.com",
  projectId: "clone-703a1",
  storageBucket: "clone-703a1.appspot.com",
  messagingSenderId: "692791097307",
  appId: "1:692791097307:web:f0d54213ae4a85679819fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
