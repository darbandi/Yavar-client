import React, { useState } from "react";
import useTagAdd from "../../api/useTagAdd";
import useTagDelete from "../../api/useTagDelete";
import useTagEdit from "../../api/useTagEdit";
import bookmark from "./../../assets/img/verse-actions/bookmark.svg";
import "./TagModal.scss";

const TagModal = (props) => {
  const { data, verseId, surahId } = props;
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");

  const [{ loading: editLoading, error: editError }, editTag] = useTagEdit(
    data
  );
  const [{ loading: addLoading, error: addError }, addTag] = useTagAdd(data);
  const [
    { loading: deleteLoading, error: deleteError },
    deleteTag,
  ] = useTagDelete(data);

  return (
    <span className="tag-modal">
      <img
        src={bookmark}
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
            <div className="modal-body">
              {data?.map((tag, index) => (
                <div key={"tag_" + tag.id}>
                  <span>
                    {index + 1} :{tag?.text}
                  </span>
                  <span className="actions">
                    <i
                      className="icon icon-edit"
                      onClick={() => editTag(tag?.id)}
                    ></i>
                    <i
                      className="icon icon-trash"
                      onClick={() => deleteTag(tag?.id)}
                    ></i>
                  </span>
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <input
                type="text"
                className="input-text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <span className="send">
                <i
                  className="icon icon-paper-plane"
                  onClick={() => addTag(surahId, verseId, text)}
                ></i>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* <div visible={visible} className="modal"></div> */}
    </span>
  );
};

export default TagModal;
