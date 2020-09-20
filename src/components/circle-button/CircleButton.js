import "./CircleButton.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import ghoran from "./../../assets/img/ghoran.svg"

const CircleButton = () => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="circle-button">
        <button >ss</button>
        <button className="active">
            ss
        </button>
        <button>ss</button>
      </div>
    </Profiler>
  );
};

export default CircleButton;
