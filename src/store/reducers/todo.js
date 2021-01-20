import * as types from "../actions/types"

const initialState = {
  todo: [{ text: "test", complete: false }],
}

const todoReducer = (state = initialState, action) => {
  let newState = {}
  let newTodo = []
  let i = 0
  switch (action.type) {
    case types.ADD_LIST:
      newTodo = [{ text: action.text, complete: false }, ...state.todo]
      newState = { ...state, todo: newTodo }
      return newState

    case types.DELETE_LIST:
      while (i < state.todo.length) {
        if (i !== action.id) {
          newTodo = [...newTodo, state.todo[i]]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.EDIT_LIST:
      while (i < state.todo.length) {
        if (i !== action.id) {
          newTodo = [...newTodo, state.todo[i]]
        } else {
          newTodo = [...newTodo, { text: action.editText, complete: false }]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.COMPLETE_LIST:
      while (i < state.todo.length) {
        if (i !== action.id) {
          newTodo = [...newTodo, state.todo[i]]
        } else {
          newTodo = [...newTodo, { text: state.todo[i].text, complete: !state.todo[i].complete }]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.VISIBLE_ALL:
      while (i < state.todo.length) {
        newTodo = [
          ...newTodo,
          {
            text: state.todo[i].text,
            complete: state.todo[i].complete,
            invisible: "",
          },
        ]
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.VISIBLE_ACTIVE:
      while (i < state.todo.length) {
        if (state.todo[i].complete === false) {
          newTodo = [
            ...newTodo,
            {
              text: state.todo[i].text,
              complete: state.todo[i].complete,
              invisible: "",
            },
          ]
        } else {
          newTodo = [
            ...newTodo,
            {
              text: state.todo[i].text,
              complete: state.todo[i].complete,
              invisible: "invisible",
            },
          ]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.VISIBLE_COMPLETED:
      while (i < state.todo.length) {
        if (state.todo[i].complete === false) {
          newTodo = [
            ...newTodo,
            {
              text: state.todo[i].text,
              complete: state.todo[i].complete,
              invisible: "invisible",
            },
          ]
        } else {
          newTodo = [
            ...newTodo,
            {
              text: state.todo[i].text,
              complete: state.todo[i].complete,
              invisible: "",
            },
          ]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    case types.CLEAR_COMPLETED:
      while (i < state.todo.length) {
        if (state.todo[i].complete === false) {
          newTodo = [...newTodo, state.todo[i]]
        }
        i = i + 1
      }
      newState = { ...state, todo: newTodo }
      return newState

    default:
      return state
  }
}

export default todoReducer
