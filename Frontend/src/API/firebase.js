// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJSz7SsvmoE_cgsPhRRbWGtTDQugnNyQg",
  authDomain: "ims-web-2cbd1.firebaseapp.com",
  projectId: "ims-web-2cbd1",
  storageBucket: "ims-web-2cbd1.firebasestorage.app",
  messagingSenderId: "616280154756",
  appId: "1:616280154756:web:a613fae156efb98d2758d1",
  measurementId: "G-J7ZFKFT3L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);