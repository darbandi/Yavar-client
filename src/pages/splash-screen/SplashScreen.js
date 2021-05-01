import "./SplashScreen.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";
import Button from "../../components/button/Button";
import { withRouter } from "react-router";

const SplashScreen = ({ history }) => {
  return (
    <Profiler id="SplashScreen" onRender={profilerCallback}>
      <div className="splash-screen">
        <div className="header-image"></div>
        <b className="title">قرآن کریم</b>
        <div className="description">نرم افزار یادگیری و ترجمه قرآن</div>
        <Button title="شروع" onClick={() => history.push("/surah")} />
      </div>
    </Profiler>
  );
};

export default withRouter(SplashScreen);
