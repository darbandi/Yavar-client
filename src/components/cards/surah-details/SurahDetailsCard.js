import "./SurahDetailsCard.scss";
import React from "react";
import quran from "./../../../assets/img/ghoran.svg";
import list from "./../../../assets/img/card/list.svg";
import besmellah from "./../../../assets/img/besmellah.svg";
import favoritesDark from "./../../../assets/img/favoritesDark.svg";

const SurahDetailsCard = ({ data = {}, type = "quran", page = "" }) => {
  const { surah_name, verse_count, place_of_descent, description } = data;
  return (
    <div className={`details-card ${page}`}>
      <div className="details-card__info">
        <div className="details-card__title">{surah_name}</div>
        {description && (
          <div>
              <span>{description}</span>
          </div>
        )}
        {!description && (
          <div>
            <span>نزول در {place_of_descent}</span>
            <span className="details-card__description">{verse_count} آیه</span>
          </div>
        )}
      </div>
      <div className="details-card__logo">
        <img
          className="details-card__image"
          src={
            page === "verses"
              ? besmellah
              : type === "list"
              ? list
              : type === "favorites"
              ? favoritesDark
              : quran
          }
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SurahDetailsCard;
