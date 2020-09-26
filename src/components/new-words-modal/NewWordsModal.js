import React, { Profiler, useState } from "react";
import { profilerCallback } from "./../../Utils";
import "./NewWordsModal.scss";

const NewWordsModal = (props) => {
  const { newWords, verseId, surahId } = props;
  const words = JSON.parse(newWords);
  const [visible, setVisible] = useState(false);
  debugger;
  return (
    <Profiler id="Versec" onRender={profilerCallback}>
      <span className="new-words-modal">
        <i className="icon icon-list" onClick={() => setVisible(true)}></i>
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
                  <div key={index}>
                    <span>
                      {index + 1} :{Object.keys(word)[0]}
                    </span>
                    <span>{Object.values(word)[0]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* <div visible={visible} className="modal"></div> */}
      </span>
    </Profiler>
  );
};

export default NewWordsModal;
