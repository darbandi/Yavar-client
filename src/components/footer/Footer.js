import "./Footer.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import CircleButton from "../circle-button/CircleButton";

const Footer = () => {
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="footer">
       <CircleButton/>
      </div>
    </Profiler>
  );
};

export default Footer;
