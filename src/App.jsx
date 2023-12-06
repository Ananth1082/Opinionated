import "./App.css";
import Header from "./Header";
import Trending from "./Trending/Components/Trending";
import Feedback from "./Feedback Page/Feedback"
import Blog from "./Blog Page/Blog"
import Login from "./Login Page/Login"
import Footer from "./Footer"
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Trending/>}/>
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Explore" element={<h1 style={{color:"white"}}>Explore Page</h1>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Test"  />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
