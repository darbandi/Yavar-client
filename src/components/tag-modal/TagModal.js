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
              <div className="modal-header">
                {/* <span onClick={() => setVisible(false)} className="close">
                  &times;
                </span> */}
                <span>درج تگ بر روی محتوا</span>
                <i
                  className="icon icon-cancel"
                  onClick={() => setVisible(false)}
                ></i>
              </div>
              <div className="modal-body">sdfsdfdsf</div>
              <div className="modal-footer">fdfdf</div>
            </div>
          </div>
        )}

        {/* <div visible={visible} className="modal"></div> */}
      </span>
    </Profiler>
  );
};

export default TagModal;
