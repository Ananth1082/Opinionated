import "../CSS/hero.css";
import { useState } from "react";
import DB from "../../../DB/TrendingDB";
import GamesDB from "../../../DB/GamesDB";
import MoviesDB from "../../../DB/MoviesDB";
import BooksDB from "../../../DB/BooksDB";
import Track from "./Track";
export default function Trending(props) {
  const [active, setActive] = useState(0);
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
        <h1>Trending Topics</h1>
        <div class="slider-container">{TrendingElements}</div>
      </div>
      <div className="wrapper">
        <Track title="Movies"data={GamesDB}  />
      </div>
      <div className="wrapper">
        <Track title="Shows" data={GamesDB} />
      </div>
      <div className="wrapper">
        <Track title="Games" data={GamesDB} />
      </div>
    </>
  );
}
