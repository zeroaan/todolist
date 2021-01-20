import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"

import { FaEdit, FaTimes, FaCheck, FaPen, FaTrashAlt } from "react-icons/fa"

import * as actions from "store/actions/todo"

const DivItem = styled.div`
  position: relative;
  display: ${(props) => (props.$invisible ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  background-color: white;
  width: 800px;
  height: 70px;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

const FormEdit = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ButtonEdit = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin: 10px;
  padding: 0px;
  font-size: 22px;
  background-color: white;
  color: rgb(129, 200, 255);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(47, 165, 255);
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
const InputEdit = styled.input`
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: rgb(240, 240, 240);
  width: 500px;
  height: 35px;
  padding: 0 15px;

  @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 150px;
  }
`
const FaIconTimes = styled(FaTimes)`
  cursor: pointer;
  margin: 10px;
  width: 23px;
  height: 23px;
  color: rgb(255, 175, 175);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(255, 100, 100);
  }

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`

const DivLeft = styled.div`
  width: 13%;
  justify-content: flex-start;
  margin: 0 10px;
`
const DivRight = styled.div`
  width: 13%;
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
`

const PText = styled.p`
  text-decoration: ${(props) => (props.$complete ? "line-through" : "none")};
  color: ${(props) => (props.$complete ? "rgb(200, 200, 200)" : "black")};
  font-size: 22px;
  width: 70%;
  margin: 0 10px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
const FaIconCheck = styled(FaCheck)`
  cursor: pointer;
  margin: 0 10px;
  padding: 3px;
  width: 25px;
  height: 25px;
  color: ${(props) => (props.$complete ? "rgb(0, 175, 175)" : "transparent")};
  border: 1px solid rgb(225, 225, 225);
  border-radius: 50%;
  transition: all 0.1s ease;

  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`
const FaIconPen = styled(FaPen)`
  cursor: pointer;
  margin: 0 10px;
  width: 20px;
  height: 20px;
  background-color: white;
  color: rgb(129, 200, 255);
  transition: all 0.3s ease;
  opacity: ${(props) => (props.$complete ? "0" : "1")};

  &:hover {
    color: rgb(47, 165, 255);
  }

  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`
const FaIconTrash = styled(FaTrashAlt)`
  cursor: pointer;
  margin: 0 10px;
  width: 20px;
  height: 20px;
  background-color: white;
  color: rgb(255, 175, 175);
  transition: all 0.3s ease;

  &:hover {
    color: rgb(255, 100, 100);
  }

  @media screen and (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
`

const DisplayListItem = ({ text, index }) => {
  const { todo } = useSelector((store) => store.todo)
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(todo[index].text)

  const onSubmit = (e) => {
    e.preventDefault()
    if (editText !== "") {
      dispatch(actions.editList(editText, index))
      setEditing(!editing)
    }
  }
  const onChange = (e) => {
    const { value } = e.target
    setEditText(value)
  }
  const onClickEdit = () => {
    setEditing(!editing)
    setEditText(todo[index].text)
  }
  const onClickDelete = () => {
    dispatch(actions.deleteList(index))
  }
  const onClickComplete = () => {
    dispatch(actions.completeList(index))
  }

  return (
    <DivItem $invisible={todo[index].invisible}>
      {editing ? (
        <>
          <FormEdit onSubmit={onSubmit}>
            <ButtonEdit>
              <FaEdit />
            </ButtonEdit>
            <InputEdit type="text" value={editText} onChange={onChange} placeholder="내용 입력" autoFocus />
            <FaIconTimes onClick={onClickEdit} />
          </FormEdit>
        </>
      ) : (
        <>
          <DivLeft>
            <FaIconCheck $complete={todo[index].complete} onClick={onClickComplete} />
          </DivLeft>
          <PText $complete={todo[index].complete}>{text}</PText>
          <DivRight>
            <FaIconPen $complete={todo[index].complete} onClick={onClickEdit} />
            <FaIconTrash onClick={onClickDelete} />
          </DivRight>
        </>
      )}
    </DivItem>
  )
}

export default DisplayListItem
