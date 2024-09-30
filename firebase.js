import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: 'AIzaSyCPR-qZdKaPxNcLMUiKZvHrsmzoJthZLTw',
  authDomain: 'ezfix-d7122.firebaseapp.com',
  projectId: 'ezfix-d7122',
  storageBucket: 'ezfix-d7122.appspot.com',
  messagingSenderId: '65296199655',
  appId: '1:65296199655:web:06acf0255d4a97377c5742',
  measurementId: 'G-E4S3P36MQC'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider, signInWithPopup, signInWithEmailAndPassword, RecaptchaVerifier, signInWithPhoneNumber };