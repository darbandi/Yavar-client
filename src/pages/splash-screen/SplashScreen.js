import "./SplashScreen.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Button from "../../components/button/Button";

const SplashScreen = () => {
  const alert7 = () => {
    alert("fgdfgdf");
  };
  return (
    <Profiler id="SplashScreen" onRender={profilerCallback}>
      <div className="splash-screen">
        <div className="header-image"></div>
        <b className="title">قرآن کریم</b>
        <div className="description">نرم افزار یادگیری و ترجمه قرآن</div>
        <Button title="شروع" onClick={alert7} />
      </div>
    </Profiler>
  );
};

export default SplashScreen;
