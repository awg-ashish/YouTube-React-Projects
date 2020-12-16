import firebase from "firebase/app";
import "firebase/firestore";

//Enter your firebase config details here. These details won't work
const firebaseConfig = {
  apiKey: "AIzaSyBrYfONNx4_EGjk-dBsI-KSmrSDgM-zxLw",
  authDomain: "todo-app-c12e1.firebaseapp.com",
  projectId: "todo-app-c12e1",
  storageBucket: "todo-app-c12e1.appspot.com",
  messagingSenderId: "814224163747",
  appId: "1:814224163747:web:815fa1b97d6b20d4f95016",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
