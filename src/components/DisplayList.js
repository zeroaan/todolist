import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import DisplayListItem from "./DisplayListItem"
import VisibleList from "./VisibleList"

const DivList = styled.div`
  max-width: 800px;
  max-height: 320px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 175, 175, 0.5);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(218, 219, 226);
    border-radius: 10px;
  }
`

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
