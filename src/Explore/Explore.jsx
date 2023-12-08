import "./explore.css"
import Blog from "./Blog"
export default function Explore({blogDB}) {
    
    const blogElements=blogDB.map((blog)=>{
        return <Blog name={blog.displayName} title={blog.body.title} time={"12 sept 2023"} content={blog.body.content} />
    })
  
    
    return (
        <div className="explore-container">
            {blogElements}
        </div>
    )
}