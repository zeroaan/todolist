import * as types from "../actions/types"
import produce from "immer"

const initialState = {
  todo: [],
}

const todoReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ADD_LIST:
        draft.todo.unshift({ text: action.text, complete: false, invisible: false })
        break
      case types.DELETE_LIST:
        draft.todo.splice(action.id, 1)
        break
      case types.EDIT_LIST:
        draft.todo[action.id].text = action.editText
        break
      case types.COMPLETE_LIST:
        draft.todo[action.id].complete = !state.todo[action.id].complete
        break
      case types.VISIBLE_ALL:
        draft.todo.map((v) => (v.invisible = false))
        break
      case types.VISIBLE_ACTIVE:
        draft.todo.map((v) => (v.complete ? (v.invisible = true) : (v.invisible = false)))
        break
      case types.VISIBLE_COMPLETED:
        draft.todo.map((v) => (v.complete ? (v.invisible = false) : (v.invisible = true)))
        break
      case types.CLEAR_COMPLETED:
        draft.todo = state.todo.filter((v) => !v.complete)
        break
      default:
        break
    }
  })
}

export default todoReducer
