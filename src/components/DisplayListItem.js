import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions/todo";
import "./DisplayListItem.css";

const DisplayListItem = ({ textItem, index }) => {
  const { todo } = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo[index].text);

  const onSubmit = (e) => {
    e.preventDefault();
    if (editText !== "") {
      dispatch(actions.editList(editText, index));
      setEditing(!editing);
    }
  };
  const onChange = (e) => {
    const { value } = e.target;
    setEditText(value);
  };
  const onClickEdit = () => {
    setEditing(!editing);
    setEditText(todo[index].text);
  };
  const onClickDelete = () => {
    dispatch(actions.deleteList(index));
  };
  const onClickComplete = () => {
    dispatch(actions.completeList(index));
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
              <br />
              <input type="submit" value="확인" />
              <button onClick={onClickEdit}>취소</button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div>
            {todo[index].complete ? (
              <>
                <p className="textItem complete">{textItem}</p>
                <button onClick={onClickComplete}>복구</button>
              </>
            ) : (
              <>
                <p className="textItem">{textItem}</p>
                <button onClick={onClickComplete}>완료</button>
                <button onClick={onClickEdit}>수정</button>
              </>
            )}
            <button onClick={onClickDelete}>삭제</button>
          </div>
        </>
      )}
    </>
  );
};

export default DisplayListItem;
