import "./blog.css"

export default function Blog() {
    return (
        <div className="blog">
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
                                <input className="blog-input-title" type="text" placeholder="Enter Blog Title"/>
                                <p>Posted on <span>March 10, 2021</span></p>
                            </div>
                            <div className="blog-right-top-right">
                                <div className="blog-right-top-right-container">
                                    <div className="blog-right-top-right-container-left">
                                        <i className="fas fa-user"></i>
                                        <p>Admin</p>
                                    </div>
                                    <div className="blog-right-top-right-container-right">
                                        <i className="fas fa-comments"></i>
                                        <p>3 Comments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="blog-right-bottom">
                            <textarea name="" id="blog-content" placeholder="Write your blog"></textarea>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        )
}