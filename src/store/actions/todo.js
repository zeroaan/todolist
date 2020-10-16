import * as types from "../actions/types";

export const addList = (text) => {
  return {
    type: types.ADD_LIST,
    text: text,
  };
};
export const deleteList = (id) => {
  return {
    type: types.DELETE_LIST,
    id: id,
  };
};
export const editList = (editText, id) => {
  return {
    type: types.EDIT_LIST,
    id: id,
    editText: editText,
  };
};
export const completeList = (id) => {
  return {
    type: types.COMPLETE_LIST,
    id: id,
  };
};
