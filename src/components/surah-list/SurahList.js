import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import useLessons from "../../api/useLessons";
import SurahItem from "../surah-item/SurahItem";

const SurahList = () => {
  const [{ data, loading, error }] = useLessons();
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="surah-list">
        {data?.map((lesson, index) => (
          <SurahItem key={index} data={lesson} />
        ))}
      </div>
    </Profiler>
  );
};

export default SurahList;
