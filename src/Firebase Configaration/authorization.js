import { getAuth,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged, 
         GoogleAuthProvider,
         signInWithPopup, 
         reload} from "firebase/auth";
import {app,auth} from "./config"    


const provider = new GoogleAuthProvider()
let user=null
export function returnUserInfo() {
    return user
}


export function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            location.replace('/Home')
        }).catch((error) => {
            alert("Invalid email or password")
            
        })
}

export function authSignInWithEmail(email,password) {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            location.replace('/Home')
        })
        .catch((error) => {
            alert("Invalid email or password")
        })
}

export function authCreateAccountWithEmail(email,password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            location.replace('/Home')
        })
        .catch((error) => {
            alert("Error creating account")
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

