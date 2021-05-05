import React, { useRef, useState } from "react";
import useTagAdd from "../../../../../api/useTagAdd";
import useTagDelete from "../../../../../api/useTagDelete";
import useTagEdit from "../../../../../api/useTagEdit";
import bookmark from "./../../../../../assets/img/verse-actions/bookmark.svg";
import bookmarkFill from "./../../../../../assets/img/verse-actions/bookmarkFill.svg";
import "./TagModal.scss";

const TagModal = (props) => {
  const { data, verseId, surahId, surahName } = props;
  const inputRef = useRef(null);
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
        src={data?.length > 0 ? bookmarkFill : bookmark}
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
              <span>
                درج تگ بر روی آیه {verseId} سوره {surahName}
              </span>
              <i
                className="icon icon-cancel"
                onClick={() => setVisible(false)}
              ></i>
            </div>
            <div className="modal-body">
              {data?.map((tag, index) => (
                <div key={"tag_" + tag.id} className="row">
                  <span>
                    <span className="number">{index + 1} : </span> {tag?.text}
                  </span>
                  <span className="actions">
                    {/* <i
                      className="icon icon-edit"
                      onClick={() => editTag(tag?.id)}
                    ></i> */}
                    <i
                      className="icon icon-trash"
                      onClick={() => deleteTag(tag?.id)}
                    ></i>
                  </span>
                </div>
              ))}
              {data.length <= 0 && <span>تا کنون هیچ تگی اضافه نشده است</span>}
            </div>
            <div className="modal-footer">
              <input
                ref={inputRef}
                type="text"
                className="input-text"
                value={text}
                placeholder="درباره این آیه بنویسید ..."
                onChange={(e) => setText(e.target.value)}
              />
              <span className="send">
                <i
                  className="icon icon-paper-plane"
                  onClick={() => {
                    addTag(surahId, verseId, text);
                    setText("");
                    inputRef.current.focus();
                  }}
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
