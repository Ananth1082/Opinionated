import "./App.css";
import Logo from "./assets/icons8-logo.svg";
export default function Header() {
  return (
    <header>
      <div id="logo-container">
        <div id="logo-img"><img src={Logo} alt="" /></div>
        <div id="logo-title"><h2>Opinionated</h2></div>
      </div>
      <div id="nav-container">
        
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Explore</a>
          <a href="#">FeedBack</a>
        
      </div>
      <div id="profile-info">Profile-PlaceHolder</div>
    </header>
  );
}
