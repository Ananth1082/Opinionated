import "./App.css";
import Header from "./Header";
import Trending from "./Trending/Components/Trending";
import Footer from "./Footer";
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Trending/>} />
        <Route path="/Blog" element={<h1 style={{color:"white"}}>Hello Path 1</h1>} />
        <Route path="/Explore" element={<h1 style={{color:"white"}}>Hello Path 2</h1>} />
        <Route path="/Feedback" element={<h1 style={{color:"white"}}>Hello Path 3</h1>} />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
