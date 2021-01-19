import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import * as actions from "store/actions/todo"

const DivVisible = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  background-color: white;
  width: 800px;
  height: 50px;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    width: 350px;
  }
`

const InputVisible = styled.input`
  cursor: pointer;
  font-size: 14px;
  outline: none;
  color: rgb(100, 100, 100);
  background-color: ${(props) => (props.clickState ? "rgb(230, 230, 230)" : "white")};
  border: 1px solid ${(props) => (props.clickState ? "rgb(230, 230, 230)" : "white")};
  border-radius: 20px;
  margin: 5px;
  width: 90px;
  height: 33px;
  transition: all 0.2s ease;

  &:hover {
    border: 1px solid rgb(230, 230, 230);
  }

  @media screen and (max-width: 768px) {
    font-size: 8px;
    width: 65px;
    height: 27px;
  }
`

const PVisible = styled.p`
  cursor: pointer;
  position: absolute;
  right: 20px;
  font-size: 14px;
  color: rgb(100, 100, 100);
  transition: all 0.1s ease;

  &:hover {
    text-decoration: underline;
    color: rgb(255, 100, 100);
  }

  @media screen and (max-width: 768px) {
    right: 10px;
    font-size: 8px;
  }
`

const VisibleList = () => {
  const dispatch = useDispatch()

  const visibleState = { all: false, active: false, complete: false }
  const [clickState, setClickState] = useState(visibleState)

  const onClickAll = () => {
    dispatch(actions.visibleAll())
    setClickState({ ...visibleState, all: true })
  }
  const onClickActive = () => {
    dispatch(actions.visibleActive())
    setClickState({ ...visibleState, active: true })
  }
  const onClickCompleted = () => {
    dispatch(actions.visibleCompleted())
    setClickState({ ...visibleState, complete: true })
  }
  const onClickClearCompleted = () => {
    dispatch(actions.clearCompleted())
    onClickAll()
  }

  return (
    <>
      <DivVisible>
        <InputVisible type="button" value="All" clickState={clickState.all} onClick={onClickAll} />
        <InputVisible type="button" value="Active" clickState={clickState.active} onClick={onClickActive} />
        <InputVisible type="button" value="Completed" clickState={clickState.complete} onClick={onClickCompleted} />
        <PVisible onClick={onClickClearCompleted}>Clear completed</PVisible>
      </DivVisible>
    </>
  )
}

export default VisibleList
