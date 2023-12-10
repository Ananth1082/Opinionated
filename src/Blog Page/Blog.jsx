import "./blog.css"
import { useState } from "react";
import { addPostToDB } from "../Firebase Configaration/FirestoreDB"


export default function Blog() {
    const [blog, setBlog] = useState({
        title: "",
        content: ""
    })
    function postButtonPressed() {
        addPostToDB(blog, "blog")
        setBlog({
            title: "",
            content: ""
        })
    }
    function handleInputChange(event) {
        setBlog(prevBlog => {
            return {
                ...prevBlog,
                [event.target.name]: event.target.value
            }
        })
    }
    return (
        <div className="blog-container">
            <div className="blog-left">
                <div className="profile-img"></div>
                <h1>Blog</h1>
                <p>Home / Blog</p>
            </div>
            <div className="blog-right">
                <div className="blog-right-container">
                    <div className="blog-right-top">
                        <div className="blog-right-top-left">
                            <input className="blog-input-title" name="title" value={blog.title} type="text" placeholder="Enter Blog Title" onChange={handleInputChange} />
                            <p>Posted on <span>-- Date --</span></p>
                        </div>
                        <div className="blog-right-top-right">
                            <div className="blog-right-top-right-container">
                                <div className="blog-right-top-right-container-left">
                                    <p>-- Rank --</p>
                                </div>
                                <div className="blog-right-top-right-container-right">
                                    <p>-- Comments --</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog-right-bottom">
                        <textarea value={blog.content} name="content" id="blog-content" placeholder="Write your blog" onChange={handleInputChange}></textarea>
                    </div>
                    <button onClick={postButtonPressed}>Submit</button>
                </div>
            </div>
        </div>
    )
}