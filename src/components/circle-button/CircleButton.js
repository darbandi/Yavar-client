import "./CircleButton.scss";
import React from "react";
// import quran from "./../../assets/img/quran.svg";
import quran from "./../../assets/img/ghoran.svg";
import favoriteDark from "./../../assets/img/favoritesDark.svg";
import bookmark from "./../../assets/img/bookmark.svg";
import { withRouter } from "react-router";

const CircleButton = ({ history }) => {
  return (
    <div className="circle-button">
      <button
        onClick={() => {
          history.push("/favorites");
        }}
      >
        <img src={favoriteDark} alt="yavar" />
      </button>
      <button
        className="active"
        onClick={() => {
          history.push("/surah");
        }}
      >
        <img src={quran} alt="yavar" />
      </button>
      <button
        onClick={() => {
          history.push("/tags");
        }}
      >
        <img src={bookmark} alt="yavar" />
      </button>
    </div>
  );
};

export default withRouter(CircleButton);
