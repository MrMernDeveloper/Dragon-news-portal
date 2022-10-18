// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTeADkrFZttPMTxGNYwfnYm1YkWLmlmJU",
    authDomain: "dragon-newspaper.firebaseapp.com",
    projectId: "dragon-newspaper",
    storageBucket: "dragon-newspaper.appspot.com",
    messagingSenderId: "434041343225",
    appId: "1:434041343225:web:f3016dcb5a3208e198e628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;