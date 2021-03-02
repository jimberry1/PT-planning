import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyCEfw4anOAeqSq-m7xfgVVkjjrMgDuAD9s',
  authDomain: 'flo-fitness.firebaseapp.com',
  projectId: 'flo-fitness',
  storageBucket: 'flo-fitness.appspot.com',
  messagingSenderId: '793252787473',
  appId: '1:793252787473:web:15dd9f14717c281afb48b0',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebaseApp.storage();

export { auth, firebaseApp, storage };
export default db;
