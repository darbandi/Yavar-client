import "./SurahDetailsCard.scss";
import React from "react";
import quran from "./../../assets/img/ghoran.svg";

const SurahDetailsCard = (props) => {
  const { data } = props;
  const { surah_name, verse_count, place_of_descent } = data || {};
  return (
    <div className="details-card">
      <div className="details-card__info">
        <div className="details-card__title">{surah_name}</div>
        <div>
          <span>نزول در {place_of_descent}</span>
          <span className="details-card__description">{verse_count} آیه</span>
        </div>
      </div>

      <div>
        <img src={quran} alt="logo" />
      </div>
    </div>
  );
};

export default SurahDetailsCard;
