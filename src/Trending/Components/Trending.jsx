import "../CSS/hero.css";
import { useState } from "react";
import GamesDB from "../../DB/GamesDB.js"
 
import DB from "../../DB/TrendingDB";
import Track from "./Track";
export default function Trending() {

  const [active, setActive] = useState(1);
  function focus(id) {
    setActive(id);
  }
  const TrendingElements = DB.map((item) => {
    return (
      <div key={item.id}
        onClick={() => focus(item.id)}
        className={"card" + (active === item.id ? " active" : "")}
        style={
          active === item.id
            ? { backgroundImage: `url(${item.posterUrl})` }
            : {}
        }
      >
        <div className="row">
          <div className="icon">{item.id}</div>
          <div className="description">
            <h4>{item.title}</h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="wrapper">
        <h1 style={{letterSpacing: "-0.15rem"}}>Trending</h1>
        <div className="slider-container">{TrendingElements}</div>
      </div>
      <div className="wrapper">
        <Track title="Free to play"data={GamesDB}  />
      </div>
      <div className="wrapper">
        <Track title="Action" data={GamesDB} />
      </div>
      <div className="wrapper">
        <Track title="Open World" data={GamesDB} />
      </div>
    </>
  );
}
