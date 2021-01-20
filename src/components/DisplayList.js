import React from "react"
import { useSelector } from "react-redux"

import DisplayListItem from "components/DisplayListItem"
import VisibleList from "components/VisibleList"

const DisplayList = () => {
  const { todo } = useSelector((store) => store.todo)

  return (
    <>
      {todo.map((v, i) => (
        <DisplayListItem key={v.text + i} text={v.text} index={i} />
      ))}
      {todo.length > 0 && <VisibleList />}
    </>
  )
}

export default DisplayList
