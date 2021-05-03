import "./SurahItem.scss";
import React from "react";
import { Link } from "react-router-dom";

const SurahItem = (props) => {
  const {
    id,
    surah_id,
    order,
    surah_name,
    verse_count,
    verses_read,
    sequence_of_descent,
    place_of_descent,
  } = props.data;
  return (
    <div className="surah-item">
      <div className="surah-item__right">
        <div className="surah-item__title">
          <Link to={`/surah-details/${id}`}>{surah_name}</Link>
        </div>
        <div className="surah-item__description">
          نزول در {place_of_descent}{" "}
          <span className="surah-item__verse">{verse_count} آیه</span>
        </div>
      </div>
      <div
        className={`surah-item__left ${verses_read ? "surah-item--read" : ""}`}
      >
        <span>{order}</span>
      </div>
    </div>
  );
};

export default SurahItem;
