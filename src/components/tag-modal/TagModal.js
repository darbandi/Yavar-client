import React, { Profiler, useState } from "react";
import { profilerCallback } from "./../../Utils";
import "./TagModal.scss";

const TagModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Profiler id="Versec" onRender={profilerCallback}>
      <span className="tag-modal">
        <img
          src={require(`./../../assets/img/bookmark.svg`)}
          alt="logo"
          onClick={() => setVisible(true)}
          className="tag-btn"
        />

        {visible && (
          <div className="modal">
            <div className="modal-content">
              <span onClick={() => setVisible(false)} className="close">
                &times;
              </span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        )}

        {/* <div visible={visible} className="modal"></div> */}
      </span>
    </Profiler>
  );
};

export default TagModal;
