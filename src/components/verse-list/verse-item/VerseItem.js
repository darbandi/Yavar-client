import "./VerseItem.scss";
import React from "react";
import useLastReads from "../../../api/useLastReads";

const VerseItem = ({ data }) => {
  let { text_arabic, text_persian, verse_id, surah_id, is_read } = data;
  const { addLastRead, removeLastRead } = useLastReads();
  return (
    <div className="verse-item">
      <div className="verse-item__row">
        <div
          className={`verse-item__number ${
            is_read ? "verse-item__number--is-read" : ""
          }`}
        >
          <span
            onClick={() => {
              if (is_read) {
                data.is_read = null;
                removeLastRead(is_read.id);
              } else {
                data.is_read = { id: "" };
                addLastRead(surah_id, verse_id);
              }
            }}
          >
            {verse_id}
          </span>
        </div>
        <div className="verse-item__arabic">{text_arabic}</div>
      </div>
      <div className="verse-item__persian">{text_persian}</div>
    </div>
  );
};

export default VerseItem;
