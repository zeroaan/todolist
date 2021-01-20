import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import DisplayListItem from "./DisplayListItem"
import VisibleList from "./VisibleList"

const DivList = styled.div``

const DisplayList = () => {
  const { todo } = useSelector((store) => store.todo)

  return (
    <>
      <DivList>
        {todo.map((item, index) => (
          <DisplayListItem key={item.text + index} textItem={item.text} index={index} />
        ))}
      </DivList>
      {todo.length > 0 && <VisibleList />}
    </>
  )
}

export default DisplayList
