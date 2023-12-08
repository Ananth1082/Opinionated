import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC9iKy7Su5ZvzVgoXfKihaobpBSVLzAis8",
  authDomain: "opinionated-60c98.firebaseapp.com",
  projectId: "opinionated-60c98",
  storageBucket: "opinionated-60c98.appspot.com",
  messagingSenderId: "266886596782",
  appId: "1:266886596782:web:5f572199d9db8c6776853f"
};


export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

