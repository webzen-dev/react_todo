import { combineReducers } from "redux";
import { operationReducer } from "./todoapp/reducers/operation";

 const rootReducer = combineReducers({
  operationReducer,
});

export default rootReducer;
