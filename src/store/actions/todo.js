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

export const visibleAll = () => {
  return {
    type: types.VISIBLE_ALL,
  };
};
export const visibleActive = () => {
  return {
    type: types.VISIBLE_ACTIVE,
  };
};
export const visibleCompleted = () => {
  return {
    type: types.VISIBLE_COMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: types.CLEAR_COMPLETED,
  };
};
