import "./Tab.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Tab = () => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="tab">
        <span className="active">سوره‌ها</span>
        <span>نزول آیه</span>
        <span>بیشترین آیه</span>
        <span>کمترین آیه</span>
      </div>
    </Profiler>
  );
};

export default Tab;
