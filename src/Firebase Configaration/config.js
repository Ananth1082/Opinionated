
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot } from "firebase/firestore"


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
const db = getFirestore(app)
const collectionName = "posts"


export async function addPostToDB(postBody) {
  console.log(auth.currentUser)
  try {
      const docRef = await addDoc(collection(db, collectionName), {
          body: postBody,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          createdAt: serverTimestamp(),
      })
      console.log("Document written with ID: ", docRef.id)
  } catch (error) {
      console.error(error.message)
  }
}

// function fetchInRealtimeAndRenderPostsFromDB() {
//   onSnapshot(collection(db, collectionName), (querySnapshot) => {
//       clearAll(postsEl)
      
//       querySnapshot.forEach((doc) => {
//           renderPost(postsEl, doc.data())
//       })
//   })
// }
