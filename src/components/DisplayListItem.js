import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { FaEdit, FaTimes, FaCheck, FaPen, FaTrashAlt } from "react-icons/fa"

import * as actions from "../store/actions/todo"
import "./DisplayListItem.css"

const DivItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  background-color: white;
  width: 800px;
  height: 70px;
  margin: auto;
`

const DisplayListItem = ({ textItem, index }) => {
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
    <DivItem id={todo[index].invisible}>
      {editing ? (
        <>
          <div className="todo__box">
            <form onSubmit={onSubmit}>
              <input
                className="todo__edit__text"
                type="text"
                value={editText}
                onChange={onChange}
                placeholder="내용 입력"
                autoFocus
              />
              <br />
              <FaEdit className="todo__edit__ok" />
              <FaTimes className="todo__edit__no" onClick={onClickEdit} />
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="todo__box">
            {todo[index].complete ? (
              <>
                <p className="textItem complete">{textItem}</p>
                <FaCheck className="completeBt cancel" onClick={onClickComplete} />
              </>
            ) : (
              <>
                <p className="textItem">{textItem}</p>
                <FaCheck className="completeBt" onClick={onClickComplete} />
                <FaPen className="todo__edit" onClick={onClickEdit} />
              </>
            )}
            <FaTrashAlt className="todo__delete" onClick={onClickDelete} />
          </div>
        </>
      )}
    </DivItem>
  )
}

export default DisplayListItem
