import React, { useEffect } from "react";
import VerseItem from "./verse-item/VerseItem";
import VerseActions from "./verse-item/verse-actions/VerseActions";
import { withRouter } from "react-router";

const VerseList = (props) => {
  const { data, location, surahName } = props;

  useEffect(() => {
    if (data.length > 0 && location.hash) {
      var elmnt = document.getElementById(location?.hash?.replace("#", ""));
      elmnt.scrollIntoView();
    }
  }, [data]);

  return (
    <div className="verce-list">
      {data?.map((verse, index) => (
        <div key={"verse_" + index} id={`item-${verse?.verse_id}`}>
          <VerseActions
            data={verse?.tags}
            verseId={verse?.verse_id}
            surahId={verse?.surah_id}
            newWords={verse?.new_words}
            surahName={surahName}
          />
          <VerseItem data={verse} />
        </div>
      ))}
    </div>
  );
};

export default withRouter(VerseList);
