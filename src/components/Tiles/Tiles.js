import "./Tiles.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Tile from "../tile/Tile";
import translate from "./../../assets/img/translate.svg";
import play from "./../../assets/img/play.svg";
import list from "./../../assets/img/list.svg";
import Interpretation from "./../../assets/img/Interpretation.svg";
import virtue from "./../../assets/img/virtue.svg";

const Tiles = (props) => {
  const { id } = props;
  const tileItems = [
    {
      title: "متن و ترجمه آیات",
      url: translate,
      col: "col-12",
      href: `/verses/${id}`,
    },
    { title: "قرائت", url: play, col: "col-6", href:  `/verses/${id}` },
    { title: "لیست کلمات", url: list, col: "col-6", href:  `/surah-new-words/${id}` },
    { title: "تفسیر", url: Interpretation, col: "col-6", href:  `/verses/${id}` },
    { title: "فضیلت", url: virtue, col: "col-6", href:  `/verses/${id}` },
  ];
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="tiles">
        {tileItems?.map((item, index) => {
          return (
            <Tile
              title={item.title}
              url={item.url}
              col={item.col}
              href={item.href}
            />
          );
        })}
      </div>
    </Profiler>
  );
};

export default Tiles;
