import React from "react";
import NewWordsModal from "./new-words-modal/NewWordsModal";
import TagModal from "./tag-modal/TagModal";
import "./VerseActions.scss";
import play from "./../../../../assets/img/verse-actions/play.svg";
import share from "./../../../../assets/img/verse-actions/share.svg";
import Favorites from "./favorites/Favorites";

const VerseActions = (props) => {
  const { data, verseId, surahId, newWords, surahName } = props;

  return (
    <div className="verse-actions">
      <div className="right-section">
        <TagModal
          data={data?.tags}
          verseId={verseId}
          surahId={surahId}
          surahName={surahName}
        />
        <img src={play} alt="logo" />
        {newWords && (
          <NewWordsModal
            newWords={newWords}
            verseId={verseId}
            surahId={surahId}
            surahName={surahName}
          />
        )}
        <Favorites data={data} verseId={verseId} surahId={surahId} />
        {/* <img src={favorite} alt="logo" /> */}
      </div>
      <div className="left-section">
        <img src={share} alt="logo" />
      </div>
    </div>
  );
};

export default VerseActions;
