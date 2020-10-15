import React from "react";
import DisplayListItem from "../containers/DisplayListItem";

const DisplayList = (props) => {
  return (
    <>
      {props.text.map((item, index) => (
        <DisplayListItem key={item + index} textItem={item} index={index} />
      ))}
    </>
  );
};

export default DisplayList;
