// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjSTx7H-NWJu7GzkQ7C_hlXel0SYLDat4",
  authDomain: "guestbook-1137e.firebaseapp.com",
  projectId: "guestbook-1137e",
  storageBucket: "guestbook-1137e.appspot.com",
  messagingSenderId: "86916266696",
  appId: "1:86916266696:web:d4e4535073ebd5282a43fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleAuthProvidor = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const sendPasswordReset= async (email) => {
  try {
    await sendPasswordResetEmail(auth,email)
  } catch (error) {
    throw(error)
  }
};

const signInWithGoogle = async () => {
  try {
     const res = await signInWithPopup(auth, googleAuthProvidor);
    const user = res.user;
    return user
  } catch (error) {
    throw (error)
  }
 
}

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  signInWithGoogle,
};
