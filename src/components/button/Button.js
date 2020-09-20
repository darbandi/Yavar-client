import "./Button.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Button = ({title, onClick}) => {
  return (
    <Profiler id="SplashScreen" onRender={profilerCallback}>
      <div className="button" onClick={onClick}>
        <span>{title}</span>
      </div>
    </Profiler>
  );
};

export default Button;
