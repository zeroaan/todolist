import React from "react";
import { useSelector } from "react-redux";
import DisplayListItem from "../components/DisplayListItem";

const DisplayList = () => {
  const { list } = useSelector((store) => store.todo);

  return (
    <>
      {list.map((item, index) => (
        <DisplayListItem
          key={item.text + index}
          textItem={item.text}
          index={index}
        />
      ))}
    </>
  );
};

export default DisplayList;
