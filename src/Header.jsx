import "./App.css";
import Logo from "./assets/icons8-logo.svg";
import { Link } from "react-router-dom";
import { authSignOut } from "./Firebase Configaration/authorization.js";
import ExtractDPFromEmail from "./Helper/ExtractDP.js";
import ProfileLogo from "./assets/icons8-male-user-100.png"

export default function Header({ user }) {
  return (
    <header>
      <div id="logo-container">
        <div id="logo-img"><a href="/Home"><img src={Logo} alt="" /></a></div>
        <div id="logo-title"><h2>Opinionated</h2></div>
      </div>
      <div id="nav-container">
        <Link to="/Home" >Home</Link>
        <Link to="/Blog" >Blog</Link>
        <Link to="/Explore" >Explore</Link>
        <Link to="/Feedback" >Feedback</Link>

      </div>
      <div id="profile-info">
        
        <a href="/Profile">
        
          <div id="profile-content">
          <img src={ProfileLogo} alt="" />
          <h4>{user ? user.displayName ||  + ExtractDPFromEmail(user.email) : ''}</h4></div>
        </a>
        {user ? <button className="action-button" onClick={authSignOut}>Sign Out</button> : null}
        {!user ? <button className="action-button" onClick={authSignOut}>Sign in</button> : null}
      </div>
    </header>
  );
}
