import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../_actions/types";

export const addList = (text) => {
  return {
    type: ADD_LIST,
    text: text,
  };
};
export const deleteList = (id) => {
  return {
    type: DELETE_LIST,
    id: id,
  };
};
export const editList = (editText, id) => {
  return {
    type: EDIT_LIST,
    id: id,
    editText: editText,
  };
};
