import "./VerseItem.scss";
import React from "react";

const VerseItem = (props) => {
  const { text_arabic, text_persian, verse_id } = props.data;

  return (
    <div className="verse-item">
      <div className="verse-item__row">
        <div className="verse-item__number">
          <span>{verse_id}</span>
        </div>
        <div className="verse-item__arabic">{text_arabic}</div>
      </div>
      <div className="verse-item__persian">{text_persian}</div>
    </div>
  );
};

export default VerseItem;
