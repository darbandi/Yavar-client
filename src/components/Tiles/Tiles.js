import "./Tiles.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Tile from "../tile/Tile";
import translate from "./../../assets/img/translate.svg";
import play from "./../../assets/img/play.svg";
import list from "./../../assets/img/list.svg";
import Interpretation from "./../../assets/img/Interpretation.svg";
import virtue from "./../../assets/img/virtue.svg";

const tileItems = [
  { title: "متن و ترجمه آیات", url: translate, col: "col-12" },
  { title: "قرائت", url: play, col: "col-6" },
  { title: "لیست کلمات", url: list, col: "col-6" },
  { title: "تفسیر", url: Interpretation, col: "col-6" },
  { title: "فضیلت", url: virtue, col: "col-6" },
];
const Tiles = (props) => {
  const { id } = props;
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="tiles">
        {tileItems?.map((item, index) => {
          return (
            <Tile id={id} title={item.title} url={item.url} col={item.col} />
          );
        })}
      </div>
    </Profiler>
  );
};

export default Tiles;
