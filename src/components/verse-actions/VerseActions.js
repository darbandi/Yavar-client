import React, { Profiler } from "react";
import TagModal from "../tag-modal/TagModal";
import { profilerCallback } from "./../../Utils";
import "./VerseActions.scss";

const VerseActions = () => {
  return (
    <Profiler id="Versec" onRender={profilerCallback}>
      <div className="verse-actions">
        <div className="right-section">
          <TagModal />
          <img src={require(`./../../assets/img/bookmark.svg`)} alt="logo" />
          <img src={require(`./../../assets/img/bookmark.svg`)} alt="logo" />
          <img src={require(`./../../assets/img/bookmark.svg`)} alt="logo" />
        </div>
        <div className="left-section">
          <img src={require(`./../../assets/img/bookmark.svg`)} alt="logo" />
        </div>
      </div>
    </Profiler>
  );
};

export default VerseActions;
