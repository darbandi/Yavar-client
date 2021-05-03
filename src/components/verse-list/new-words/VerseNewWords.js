import React from "react";
import "./VerseNewWords.scss";

const VerseNewWords = ({ data }) => {
  let counter = 1;
  return (
    <div className="verse-new-words">
      {data?.map((verse) => {
        if (verse.new_words === "[]") return null;
        const words = JSON.parse(verse.new_words);
        return words.map((item) => {
          return (
            <div key={"word_" + counter} className="verse-new-words__item">
              <div className="verse-new-words__arabic">
                <span className="verse-new-words__number">{counter++}</span>{" "}
                {Object.keys(item)[0].replace(";", "")}
              </div>
              <div className="verse-new-words__persian">
                {Object.values(item)[0]}
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default VerseNewWords;
