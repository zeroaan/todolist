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
    <div id={todo[index].invisible} className="item__box">
      {editing ? (
        <>
          <div className="todo__box">
            <form onSubmit={onSubmit}>
              <input
                className="todo__edit__text"
                type="text"
                value={editText}
                onChange={onChange}
                placeholder="내용 입력"
                autoFocus
              />
              <br />
              <input
                className="todo__edit__ok"
                type="submit"
                value="&#xf044;"
              />
              <button className="todo__edit__no" onClick={onClickEdit}>
                <i className="fas fa-times"></i>
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="todo__box">
            {todo[index].complete ? (
              <>
                <p className="textItem complete">{textItem}</p>
                <button className="completeBt cancel" onClick={onClickComplete}>
                  <i className="fas fa-check"></i>
                </button>
              </>
            ) : (
              <>
                <p className="textItem">{textItem}</p>
                <button className="completeBt" onClick={onClickComplete}>
                  <i className="fas fa-check"></i>
                </button>
                <button className="todo__edit" onClick={onClickEdit}>
                  <i className="fas fa-pen"></i>
                </button>
              </>
            )}
            <button className="todo__delete" onClick={onClickDelete}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayListItem;
