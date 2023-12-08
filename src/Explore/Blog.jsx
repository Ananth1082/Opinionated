export default function Blog({name,title,time,content}) {
    return (
        <div className="blog-container" >
  <div className="sender-profile-info"><h2>{name}</h2>
    <h3>{time}</h3>
  </div>
  <div className="blog-main-content">
    <div className="title"><h3>{title}</h3></div>
    <div className="blog-main-para">
      <p>
        {content}
      </p>
      
    </div>
  </div>
   
</div>
    )
} 