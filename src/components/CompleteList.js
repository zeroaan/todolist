import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { FaCheck, FaPen, FaTrashAlt } from "react-icons/fa"

import * as actions from "store/actions/todo"

const CompleteList = ({ text, index }) => {
  const dispatch = useDispatch()
  const { todo } = useSelector((store) => store.todo)

  const onClickComplete = () => {
    dispatch(actions.completeList(index))
  }
  const onClickEdit = () => {
    setEditing(!editing)
    setEditText(todo[index].text)
  }
  const onClickDelete = () => {
    dispatch(actions.deleteList(index))
  }

  return (
    <>
      <div className="todo__box">
        {todo[index].complete ? (
          <>
            <p className="textItem complete">{text}</p>
            <FaCheck className="completeBt cancel" onClick={onClickComplete} />
          </>
        ) : (
          <>
            <p className="textItem">{text}</p>
            <FaCheck className="completeBt" onClick={onClickComplete} />
            <FaPen className="todo__edit" onClick={onClickEdit} />
          </>
        )}
        <FaTrashAlt className="todo__delete" onClick={onClickDelete} />
      </div>
    </>
  )
}

export default CompleteList
