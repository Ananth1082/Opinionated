import "./account.css"
import Google from "../assets/google.jpg"
import { authSignInWithGoogle,authSignInWithEmail, authCreateAccountWithEmail } from "../Firebase Configaration/authorization.js"
import { useState } from "react"
export default function Login() {
    const [FormData, setFormData] = useState({
        email: "",
        password: ""
    })
    function handleFormInputChange(event) {
        setFormData(prevFormData => {
            console.log(FormData);
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    function submitForm() {
        authSignInWithEmail(FormData.email,FormData.password)
        clearForm()
    }
    function createAccount() {
        authCreateAccountWithEmail(FormData.email,FormData.password)
        clearForm()
    }
    function clearForm() {
        setFormData({
            email: "",
            password: ""
        })
    }
    return (

        <section className="login-section" id="logged-out-view">
            <div className="login-container">
                <div className="account-container">
                    <h1 className="app-title">Opinionated</h1>

                    <div className="provider-buttons">
                        <button id="sign-in-with-google-btn" className="provider-btn" onClick={authSignInWithGoogle}>
                            <img src={Google} className="google-btn-logo" />
                            Sign in with Google
                        </button>
                    </div>

                    <div className="auth-fields-and-buttons">
                        <input id="email-input" type="email" placeholder="Email" onChange={handleFormInputChange} name="email" value={FormData.email} />
                        <input id="password-input" type="password" placeholder="Password" onChange={handleFormInputChange} name="password" value={FormData.password} />

                        <button id="sign-in-btn" className="primary-btn" onClick={submitForm}>Sign in</button>
                        <button id="create-account-btn" className="secondary-btn" onClick={createAccount}>Create Account</button>
                    </div>
                </div>
                <div className="login-image"></div>
            </div>
        </section>

    )
}