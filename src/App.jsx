import "./App.css";
import Header from "./Header";
import Trending from "./Trending/Components/Trending";
import Feedback from "./Feedback Page/Feedback"
import Blog from "./Blog Page/Blog"
import Login from "./Login Page/Login"
import Footer from "./Footer"
import {Routes,Route} from "react-router-dom"
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Firebase Configaration/Config"
import Explore from "./Explore/Explore"
import { db } from "./Firebase Configaration/Config"
import { collection, onSnapshot } from "firebase/firestore"
import Profile from "./Profile/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [blogDB,setBlogDB]=useState([])

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u)
      fetchInRealtimeAndRenderPostsFromDB()
    } else {
      
    }
})
function fetchInRealtimeAndRenderPostsFromDB() {
  onSnapshot(collection(db, "blog"), (querySnapshot) => {
      setBlogDB([])
      
      querySnapshot.forEach((doc) => {
          setBlogDB((prev)=>{
              return [doc.data(),...prev]
          })
      })
  })
}

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Trending/>}/>
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/Explore" element={<Explore blogDB={blogDB}/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Profile" element={<Profile data={user} />}  />
      </Routes>
      <br />
      <Footer />
    </>
  );
}

export default App;
