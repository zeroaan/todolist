import React, { useState } from "react";

const AddList = (props) => {
  const [list, setList] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(list);
    setList("");
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
