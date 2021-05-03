import React, { useState } from "react";
import "./NewWordsModal.scss";

import list from "./../../../../../assets/img/verse-actions/list.svg";
import VerseNewWords from "../../../new-words/VerseNewWords";

const NewWordsModal = (props) => {
  const { newWords, verseId, surahId } = props;
  const [visible, setVisible] = useState(false);

  return (
    <span className="new-words-modal">
      <img src={list} onClick={() => setVisible(true)} alt="yavar" />
      {visible && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span>
                کلمات آیه {verseId} سوره {surahId}
              </span>
              <i
                className="icon icon-cancel"
                onClick={() => setVisible(false)}
              ></i>
            </div>
            <div className="modal-body">
              <VerseNewWords data={[{ new_words: newWords }]} />
            </div>
          </div>
        </div>
      )}
    </span>
  );
};

export default NewWordsModal;
