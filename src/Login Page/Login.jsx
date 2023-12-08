import "./account.css"
import Google from "../assets/google.jpg"
import {authSignInWithGoogle} from "../Firebase/authorization.js"
export default function Login() {
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
                        <input id="email-input" type="email" placeholder="Email" />
                        <input id="password-input" type="password" placeholder="Password" />

                        <button id="sign-in-btn" className="primary-btn">Sign in</button>
                        <button id="create-account-btn" className="secondary-btn">Create Account</button>
                    </div>
                </div>
                <div className="login-image"></div>
            </div>
        </section>

    )
}