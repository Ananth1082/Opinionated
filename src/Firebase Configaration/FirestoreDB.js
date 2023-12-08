import { db, auth } from "./Config"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"



export async function addPostToDB(postBody,collectionName) {
  try {
      const docRef = await addDoc(collection(db, collectionName), {
          body: postBody,
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          createdAt: serverTimestamp(),
      })
    
  } catch (error) {
      console.error(error.message)
  }
}