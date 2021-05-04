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
    <Link to={`/surah-details/${id}`}>
      <div className="surah-item">
        <div className="surah-item__right">
          <div className="surah-item__title">{surah_name}</div>
          <div className="surah-item__description">
            نزول در {place_of_descent}{" "}
            <span className="surah-item__verse">{verse_count} آیه</span>
          </div>
        </div>
        {verses_read > 0 && verses_read !== verse_count && (
          <span className="surah-item__reading">در حال قرائت</span>
        )}
        <div
          className={`surah-item__left ${
            verses_read ? "surah-item--read" : ""
          }`}
        >
          <span>{order}</span>
        </div>
      </div>
    </Link>
  );
};

export default SurahItem;
