import React from "react"
import { useSelector } from "react-redux"

import DisplayListItem from "./DisplayListItem"
import VisibleList from "./VisibleList"

const DisplayList = () => {
  const { todo } = useSelector((store) => store.todo)

  return (
    <>
      {todo.map((item, index) => (
        <DisplayListItem key={item.text + index} textItem={item.text} index={index} />
      ))}
      {todo.length > 0 && <VisibleList />}
    </>
  )
}

export default DisplayList
