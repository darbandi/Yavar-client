import "./Tile.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Tile = (props) => {
  const { col, title, url, href } = props;
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <a href={href} className={["tile", col].join(" ")}>
        <div>
          <img src={url} alt="logo" />
        </div>
        <div>{title}</div>
      </a>
    </Profiler>
  );
};

export default Tile;
