import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayListItem from "../components/DisplayListItem";
import * as actions from "../store/actions/todo";
import "./DisplayList.css";

const DisplayList = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((store) => store.todo);

  const onClickAll = () => {
    dispatch(actions.visibleAll());
  };
  const onClickActive = () => {
    dispatch(actions.visibleActive());
  };
  const onClickCompleted = () => {
    dispatch(actions.visibleCompleted());
  };
  const onClickClearCompleted = () => {
    dispatch(actions.clearCompleted());
  };

  return (
    <>
      {todo.map((item, index) => (
        <DisplayListItem
          key={item.text + index}
          textItem={item.text}
          index={index}
        />
      ))}
      {todo.length > 0 ? (
        <div className="todo__visible">
          <button onClick={onClickAll}>All</button>
          <button onClick={onClickActive}>Active</button>
          <button onClick={onClickCompleted}>Completed</button>
          <p onClick={onClickClearCompleted}>Clear completed</p>
        </div>
      ) : null}
    </>
  );
};

export default DisplayList;
