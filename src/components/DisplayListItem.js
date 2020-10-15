import React, { useState } from "react";

const DisplayListItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(props.text[props.index]);

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(editText, props.index);
    setEditing(!editing);
  };
  const onChange = (e) => {
    const { value } = e.target;
    setEditText(value);
  };
  const onClickEdit = () => {
    setEditing(!editing);
    setEditText(props.text[props.index]);
  };
  const onClickDelete = () => {
    props.onClickDelete(props.index);
  };

  return (
    <>
      {editing ? (
        <>
          <div>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={editText}
                onChange={onChange}
                placeholder="내용 입력"
              />
              <input type="submit" value="확인" />
            </form>
            <button onClick={onClickEdit}>취소</button>
          </div>
        </>
      ) : (
        <>
          <div>
            {props.textItem}
            <button onClick={onClickEdit}>수정</button>
            <button onClick={onClickDelete}>삭제</button>
          </div>
        </>
      )}
    </>
  );
};

export default DisplayListItem;
