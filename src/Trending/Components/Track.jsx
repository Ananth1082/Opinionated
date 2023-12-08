import "../CSS/track.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Track({title, data}) {
  const [page, setPage] = useState(0);
  const dbSize = data.length

  const numberOfPages = Math.floor(dbSize/4)
  const dataELements = data.map((item) => {
    return (
      <img key={item.id} src={item.thumbnail} 
      alt=""/>
    )
  })
  
  function moveLeft() {
    setPage(prev=> prev===0?numberOfPages-1:(prev-1)%numberOfPages)
    console.log(page);
  }
  function moveRight() {
    setPage((page+1)%numberOfPages)
    console.log(page);
  }
  return (
    <div className="row">
    <div className="header">
      <h3 className="title">{title}</h3>
    </div>
    <div className="container">
      <button onClick={moveLeft} className="handle left-handle">
        <div className="text">&#8249;</div>
      </button>
      <div className="slider" style={{transform: `translateX(calc(${page} * -100%))`}}>
        {dataELements}
      </div>
      <button onClick={moveRight} className="handle right-handle">
        <div className="text">&#8250;</div>
      </button>
    </div>
  </div>
  )
}