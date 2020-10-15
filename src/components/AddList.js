import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions/todo";

const AddList = (props) => {
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
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="할 일 입력"
          value={list}
          onChange={onChange}
        />
        <input type="submit" value="추가" />
      </form>
    </>
  );
};

export default AddList;
