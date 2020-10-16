import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/todo";
import "./AddList.css";

const AddList = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (list !== "") {
      dispatch(actions.addList(list));
      setList("");
    }
  };
  const onChange = (e) => {
    const { value } = e.target;
    setList(value);
  };

  return (
    <div className="todo__add">
      <form onSubmit={onSubmit}>
        <input
          className="todo__add__text"
          type="text"
          placeholder="할 일 입력"
          value={list}
          onChange={onChange}
          autoFocus
        />
        <input className="todo__add__submit" type="submit" value="&#xf1d8;" />
      </form>
    </div>
  );
};

export default AddList;
