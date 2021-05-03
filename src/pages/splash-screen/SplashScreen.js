import "./SplashScreen.scss";
import React from "react";
import Button from "../../components/button/Button";
import { withRouter } from "react-router";

const SplashScreen = ({ history }) => {
  return (
    <div className="splash-screen">
      <div className="header-image"></div>
      <b className="title">قرآن کریم</b>
      <div className="description">نرم افزار یادگیری و ترجمه قرآن</div>
      <Button title="شروع" onClick={() => history.push("/surah")} />
    </div>
  );
};

export default withRouter(SplashScreen);
