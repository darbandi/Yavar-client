import React, { useState } from "react";
import "./NewWordsModal.scss";

import list from "./../../assets/img/verse-actions/list.svg";

const NewWordsModal = (props) => {
  const { newWords, verseId, surahId } = props;
  const words = JSON.parse(newWords);
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
              {words?.map((word, index) => (
                <div key={"word_" + index} className="modal-body__item">
                  <div className="modal-body__arabic">
                    {index + 1} : {Object.keys(word)[0]}
                  </div>
                  <div className="modal-body__persian">{Object.values(word)[0]}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div visible={visible} className="modal"></div> */}
    </span>
  );
};

export default NewWordsModal;
