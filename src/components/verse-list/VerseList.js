import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import VerseItem from "../verse-item/VerseItem";
import VerseActions from "../../components/verse-actions/VerseActions";

const VerseList = (props) => {
  const { data } = props;
  return (
    <Profiler id="Verse" onRender={profilerCallback}>
      <div className="verce-list">
        {data?.map((lesson, index) => (
          <div>
            <VerseActions />
            <VerseItem key={index} data={lesson} />
          </div>
        ))}
      </div>
    </Profiler>
  );
};

export default VerseList;
