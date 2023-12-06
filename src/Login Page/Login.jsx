import "./account.css"
import Google from "../assets/google.jpg"
export default function Login() {
    return (

        <section className="login-section" id="logged-out-view">
            <div className="login-container">
                <div class="account-container">
                    <h1 class="app-title">Opinionated</h1>

                    <div class="provider-buttons">
                        <button id="sign-in-with-google-btn" class="provider-btn">
                            <img src={Google} class="google-btn-logo" />
                            Sign in with Google
                        </button>
                    </div>

                    <div class="auth-fields-and-buttons">
                        <input id="email-input" type="email" placeholder="Email" />
                        <input id="password-input" type="password" placeholder="Password" />

                        <button id="sign-in-btn" class="primary-btn">Sign in</button>
                        <button id="create-account-btn" class="secondary-btn">Create Account</button>
                    </div>
                </div>
                <div className="login-image"></div>
            </div>
        </section>

    )
}