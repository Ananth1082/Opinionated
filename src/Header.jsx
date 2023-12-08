import "./App.css";
import Logo from "./assets/icons8-logo.svg";
import { Link } from "react-router-dom";
import { authSignOut } from "./Firebase/authorization.js";
export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <div id="logo-img"><img src={Logo} alt="" /></div>
        <div id="logo-title"><h2>Opinionated</h2></div>
      </div>
      <div id="nav-container">
        <Link to="/Home" >Home</Link>
        <Link to="/Blog" >Blog</Link>
        <Link to="/Explore" >Explore</Link>
        <Link to="/Feedback" >Feedback</Link>
        
      </div>
      <div id="profile-info">Profile-PlaceHolder</div>
      <button onClick={authSignOut}>Sign Out</button>
    </header>
  );
}
