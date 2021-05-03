import React from "react";
import Tile from "./tile/Tile";
import translate from "./../../assets/img/translate.svg";
import play from "./../../assets/img/play.svg";
import listDark from "./../../assets/img/list-dark.svg";
import Interpretation from "./../../assets/img/Interpretation.svg";
import virtue from "./../../assets/img/virtue.svg";
import "./Tiles.scss";

const Tiles = (props) => {
  const { id } = props;
  const tileItems = [
    {
      id: 1,
      title: "متن و ترجمه آیات",
      url: translate,
      col: "col-12",
      href: `/verses/${id}`,
    },
    {
      id: 2,
      title: "قرائت",
      url: play,
      col: "col-6",
      href: `/verses/${id}`,
    },
    {
      id: 3,
      title: "لیست کلمات",
      url: listDark,
      col: "col-6",
      href: `/surah-new-words/${id}`,
    },
    {
      id: 4,
      title: "تفسیر",
      url: Interpretation,
      col: "col-6",
      href: `/verses/${id}`,
    },
    {
      id: 5,
      title: "فضیلت",
      url: virtue,
      col: "col-6",
      href: `/verses/${id}`,
    },
  ];
  return (
    <div className="tiles">
      {tileItems?.map((item) => {
        return (
          <Tile
            key={item.id}
            title={item.title}
            url={item.url}
            col={item.col}
            href={item.href}
          />
        );
      })}
    </div>
  );
};

export default Tiles;
