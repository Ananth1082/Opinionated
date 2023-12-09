import "./explore.css"
import Blog from "./Blog"
import getDate from "../Helper/GetDate.js"
export default function Explore({blogDB}) {
    
    const blogElements=blogDB.map((blog)=>{
        return <Blog name={blog.displayName} title={blog.body.title} time={getDate(blog.createdAt)} content={blog.body.content} />
    })
  
    
    return (
        <div className="explore-container">
            {blogElements}
        </div>
    )
}