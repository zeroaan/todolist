import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../_actions/types";

export default (state, action) => {
  if (state === undefined) {
    state = {
      text: [],
    };
  }
  let newState;
  let newText = [];
  let i = 0;
  switch (action.type) {
    case ADD_LIST:
      newText = [action.text, ...state.text];
      newState = { ...state, text: newText };
      return newState;

    case DELETE_LIST:
      while (i < state.text.length) {
        if (i !== action.id) {
          newText = [...newText, state.text[i]];
        }
        i = i + 1;
      }
      newState = { ...state, text: newText };
      return newState;

    case EDIT_LIST:
      while (i < state.text.length) {
        if (i !== action.id) {
          newText = [...newText, state.text[i]];
        } else {
          newText = [...newText, action.editText];
        }
        i = i + 1;
      }
      newState = { ...state, text: newText };
      return newState;

    default:
      return state;
  }
};
