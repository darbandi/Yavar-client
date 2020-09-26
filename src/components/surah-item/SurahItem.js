import "./SurahItem.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

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
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="surah-item">
        <div className="name">
          <div className="title">
            <a href={`/surah-details/${id}`}>{surah_name}</a>
          </div>
          <div className="description">
            نزول در {place_of_descent} {verse_count} آیه
          </div>
        </div>
        <div className="count">
          <span>{order}</span>
        </div>
      </div>
    </Profiler>
  );
};

export default SurahItem;
