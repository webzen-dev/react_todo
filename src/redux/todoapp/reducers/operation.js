 import {
  ADD_TODO_ITEM,
  DELETE_ALL,
  REMOVE_TODO_ITEM,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
} from "../actions";

const initialState = [
  { id: 1, todo: "Todo List example", completed: true },
];

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO_ITEM:
      const filtredTodo = state.filter((todo) => todo.id !== action.payload);
      return filtredTodo;
    case UPDATE_TODO:
      let data = action.payload;
      const updateArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.todo = data.todo;
          item.completed = data.completed;
        }
        updateArray.push(item);
      });
      return updateArray;
    case UPDATE_CHECKBOX:
      let todoArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        todoArray.push(item);
      });
      return todoArray;
      break;
    default:
      return state;
      break;
  }
};
