import "./explore.css"
import Blog from "./Blog"
import { useState } from "react"
import { db } from "../Firebase Configaration/Config"
import { collection, getDocs } from "firebase/firestore"
export default function Explore() {
    const [blogDB,setBlogDB]=useState([])
    const blogElements=blogDB.map((blog)=>{
        return <Blog name={blog.displayName} title={blog.body.title} time={"12 sept 2023"} content={blog.body.content} />
    })
    async function fetchOnceAndRenderPostsFromDB() {
        const querySnapshot = await getDocs(collection(db, "blog"))
        setBlogDB([])
        querySnapshot.forEach((doc) => {
            setBlogDB((prev)=>{
                return [...prev,doc.data()]
            })
        })
    }
    
    return (
        <div className="explore-container">
            {blogElements}
            <button onClick={fetchOnceAndRenderPostsFromDB}>Fetch</button>
        </div>
    )
}