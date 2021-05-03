import "./LastRead.scss";
import React from "react";

const LastRead = () => {
  return (
    <div className="last-read">
      <div className="last-read__title">
        <img
          className="last-read__icon"
          src={require("./../../assets/img/last-read.svg")}
          alt="logo"
        />
        <span>آخرین آیه قرائت شده</span>
      </div>
      <div className="last-read__verse">
        <div className="last-read__verse__right">
          <div className="last-read__verse__title">الفاتحه</div>
          <div className="last-read__verse__description"> 7 شماره آیه</div>
        </div>

        <div className="last-read__verse__logo">
          <img src={require("./../../assets/img/quran.svg")} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default LastRead;
