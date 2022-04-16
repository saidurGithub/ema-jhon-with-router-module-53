
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4evrI198XWBPGEjBhpQ-NaVbAUzU-BKw",
    authDomain: "simple-c0e3f.firebaseapp.com",
    projectId: "simple-c0e3f",
    storageBucket: "simple-c0e3f.appspot.com",
    messagingSenderId: "1060174388875",
    appId: "1:1060174388875:web:10349239d69bfaaed8fe8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;