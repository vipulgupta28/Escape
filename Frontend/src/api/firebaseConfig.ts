import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider,RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBIcYdonpWndmBqp6IiVqPrQkJuowQ6Zlo",
  authDomain: "escape-62a2a.firebaseapp.com",
  projectId: "escape-62a2a",
  storageBucket: "escape-62a2a.firebasestorage.app",
  messagingSenderId: "467351744618",
  appId: "1:467351744618:web:9d230e13fb634b2eda1a13",
  measurementId: "G-3ZJCZ1Y7FF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
export {signInWithPhoneNumber, RecaptchaVerifier};
