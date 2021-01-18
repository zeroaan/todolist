import React from "react"
import { useDispatch } from "react-redux"

import * as actions from "store/actions/todo"

const VisibleList = () => {
  const dispatch = useDispatch()

  const onClickAll = () => {
    dispatch(actions.visibleAll())
  }
  const onClickActive = () => {
    dispatch(actions.visibleActive())
  }
  const onClickCompleted = () => {
    dispatch(actions.visibleCompleted())
  }
  const onClickClearCompleted = () => {
    dispatch(actions.clearCompleted())
  }

  return (
    <>
      <div className="todo__visible">
        <button onClick={onClickAll}>All</button>
        <button onClick={onClickActive}>Active</button>
        <button onClick={onClickCompleted}>Completed</button>
        <p onClick={onClickClearCompleted}>Clear completed</p>
      </div>
    </>
  )
}

export default VisibleList
