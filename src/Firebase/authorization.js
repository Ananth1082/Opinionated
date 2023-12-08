import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged, 
         GoogleAuthProvider,
         signInWithPopup } from "firebase/auth";
import app from "./config"    

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            location.replace('/Home')
        }).catch((error) => {
            console.error(error.message)
        })
}

export function authSignInWithEmail() {
    const email = emailInputEl.value
    const password = passwordInputEl.value
    
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            clearAuthFields()
        })
        .catch((error) => {
            console.error(error.message)
        })
}

export function authCreateAccountWithEmail() {
    const email = emailInputEl.value
    const password = passwordInputEl.value

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            clearAuthFields()
        })
        .catch((error) => {
            console.error(error.message) 
        })
}

export function authSignOut() {
    signOut(auth)
        .then(() => {
            location.replace('/')
        }).catch((error) => {
            console.error(error.message)
        })
}
