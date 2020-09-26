import "./LastRead.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const LastRead = ({}) => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="last-read">
        <div className="section-1">
          <img src={require("./../../assets/img/last-read.svg")} alt="logo" />
        </div>
        <div className="section-2">
          <span className="title">آخرین خوانده شده</span>
          <div className="surah-name">الفاتحه</div>
          <div className="verse-count"> 7 شماره آیه</div>
        </div>

        <div className="section-3">
          <img src={require("./../../assets/img/ghoran.svg")} alt="logo" />
        </div>
      </div>
    </Profiler>
  );
};

export default LastRead;
