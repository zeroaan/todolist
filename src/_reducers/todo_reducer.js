import {
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  COMPLETE_LIST,
} from "../_actions/types";

export default (state, action) => {
  if (state === undefined) {
    state = {
      list: [],
    };
  }
  let newState;
  let newText = [];
  let i = 0;
  switch (action.type) {
    case ADD_LIST:
      newText = [{ text: action.text, complete: false }, ...state.list];
      newState = { ...state, list: newText };
      return newState;

    case DELETE_LIST:
      while (i < state.list.length) {
        if (i !== action.id) {
          newText = [...newText, state.list[i]];
        }
        i = i + 1;
      }
      newState = { ...state, list: newText };
      return newState;

    case EDIT_LIST:
      while (i < state.list.length) {
        if (i !== action.id) {
          newText = [...newText, state.list[i]];
        } else {
          newText = [...newText, { text: action.editText, complete: false }];
        }
        i = i + 1;
      }
      newState = { ...state, list: newText };
      return newState;

    case COMPLETE_LIST:
      while (i < state.list.length) {
        if (i !== action.id) {
          newText = [...newText, state.list[i]];
        } else {
          newText = [
            ...newText,
            { text: state.list[i].text, complete: !state.list[i].complete },
          ];
        }
        i = i + 1;
      }
      newState = { ...state, list: newText };
      return newState;

    default:
      return state;
  }
};
