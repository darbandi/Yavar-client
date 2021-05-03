import "./Tile.scss";
import React from "react";

const Tile = (props) => {
  const { col, title, url, href } = props;
  return (
    <a href={href} className={["tile", col].join(" ")}>
      <div>
        <img src={url} alt="logo" />
      </div>
      <div className="tile__title">{title}</div>
    </a>
  );
};

export default Tile;
