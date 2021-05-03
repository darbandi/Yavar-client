import "./Tile.scss";
import React from "react";
import { Link } from "react-router-dom";

const Tile = (props) => {
  const { col, title, url, href } = props;
  return (
    <Link to={href} className={["tile", col].join(" ")}>
      <div>
        <img src={url} alt="logo" />
      </div>
      <div className="tile__title">{title}</div>
    </Link>
  );
};

export default Tile;
