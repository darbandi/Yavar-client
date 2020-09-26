import "./Header.scss";
import React, { Profiler } from "react";
import { profilerCallback } from "./../../Utils";

const Header = (props) => {
  const { headerOption } = props;
  return (
    <Profiler id="Surah" onRender={profilerCallback}>
      <div className="header">
        <div className="right-section">
          {headerOption?.action?.includes("back") && (
            <img
              src={require(`./../../assets/img/action-bar-back.svg`)}
              alt="logo"
            />
          )}
          {headerOption?.action?.includes("menu") && (
            <img
              src={require(`./../../assets/img/action-bar-menu.svg`)}
              alt="logo"
            />
          )}
          <b className="title">{"قرآن کریم"}</b>
        </div>
        <div className="left-section">
          {headerOption?.action?.includes("search") && (
            <img
              src={require("./../../assets/img/action-bar-search.svg")}
              alt="logo"
            />
          )}
        </div>
      </div>
    </Profiler>
  );
};

export default Header;
