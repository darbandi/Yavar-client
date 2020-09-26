import "./VerseItem.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const VerseItem = (props) => {
  debugger;
  const { text_arabic, text_persian, verse_id } = props.data;

  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="verse-item">
        <div className="count">
          <span>{verse_id}</span>
        </div>
        <div className="name">
          <div className="title">{text_arabic}</div>
          <div className="description">{text_persian}</div>
        </div>
      </div>
    </Profiler>
  );
};

export default VerseItem;
