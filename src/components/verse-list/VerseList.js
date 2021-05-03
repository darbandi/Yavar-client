import React from "react";
import VerseItem from "./verse-item/VerseItem";
import VerseActions from "./verse-item/verse-actions/VerseActions";

const VerseList = (props) => {
  const { data } = props;
  return (
    <div className="verce-list">
      {data?.map((verse, index) => (
        <div key={"verse_" + index}>
          <VerseActions
            data={verse.tags}
            verseId={verse.verse_id}
            surahId={verse.surah_id}
            newWords={verse.new_words}
          />
          <VerseItem data={verse} />
        </div>
      ))}
    </div>
  );
};

export default VerseList;
