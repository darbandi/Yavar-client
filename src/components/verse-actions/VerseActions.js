import React, { Profiler } from "react";
import NewWordsModal from "../new-words-modal/NewWordsModal";
import TagModal from "../tag-modal/TagModal";
import { profilerCallback } from "./../../Utils";
import "./VerseActions.scss";

const VerseActions = (props) => {
  const { data, verseId, surahId, newWords } = props;
  return (
    <Profiler id="Versec" onRender={profilerCallback}>
      <div className="verse-actions">
        <div className="right-section">
          <TagModal data={data} verseId={verseId} surahId={surahId} />
          <img src={require(`./../../assets/img/bookmark.svg`)} alt="logo" />
          {newWords && (
            <NewWordsModal
              newWords={newWords}
              verseId={verseId}
              surahId={surahId}
            />
          )}
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
