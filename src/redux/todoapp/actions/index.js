export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TODO_ITEM = "REMOVE_TODO_ITEM";
export const UPDATE_TODO = "UPDATE_TODO";
export const UPDATE_CHECKBOX = "UPDATE_CHECKBOX";
export const addTodoItem = (payload) => {
  return { type: ADD_TODO_ITEM, payload };
};

export const deleteAll = () => {
  return { type: DELETE_ALL };
};

export const removeTodoItem = (payload) => {
  return { type: REMOVE_TODO_ITEM, payload };
};
export const handleEditSubmit = (payload) => {
  return { type: UPDATE_TODO, payload };
};
export const handleCheckBox = (payload) => {
  return {
    type: UPDATE_CHECKBOX,
    payload,
  };
};
