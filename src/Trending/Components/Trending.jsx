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
      <div
        onClick={() => focus(item.id)}
        className={"card" + (active === item.id ? " active" : "")}
        style={
          active === item.id
            ? { backgroundImage: `url(${item.posterUrl})` }
            : {}
        }
      >
        <div class="row">
          <div class="icon">{item.id}</div>
          <div class="description">
            <h4>{item.title}</h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div class="wrapper">
        <h1>Trending</h1>
        <div class="slider-container">{TrendingElements}</div>
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
