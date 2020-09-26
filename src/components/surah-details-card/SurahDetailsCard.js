import "./SurahDetailsCard.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const SurahDetailsCard = (props) => {
  const { data } = props;
  const { surah_name, verse_count, place_of_descent } = data || {};
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="Surah-details-card">
        <div className="section-1">
          <div className="surah-name">{surah_name}</div>
          <div className="verse-count">
            <span>نزول در {place_of_descent}</span>
            <span>{verse_count} آیه</span>
          </div>
        </div>

        <div className="section-2">
          <img src={require("./../../assets/img/ghoran.svg")} alt="logo" />
        </div>
      </div>
    </Profiler>
  );
};

export default SurahDetailsCard;
