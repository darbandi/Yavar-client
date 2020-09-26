import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import VerseItem from "../verse-item/VerseItem";
import VerseActions from "../../components/verse-actions/VerseActions";

const VerseList = (props) => {
  const { data } = props;
  debugger;
  return (
    <Profiler id="Verse" onRender={profilerCallback}>
      <div className="verce-list">
        {data?.map((verse, index) => (
          <div>
            <VerseActions
              data={verse.tags}
              verseId={verse.verse_id}
              surahId={verse.surah_id}
              newWords={verse.new_words}
            />
            <VerseItem key={index} data={verse} />
          </div>
        ))}
      </div>
    </Profiler>
  );
};

export default VerseList;
