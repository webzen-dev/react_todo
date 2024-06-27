// actions :
import { deleteAll } from "./redux/todoapp/actions";
// moduls:
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// components :
import Form from "./components/Form";
import Todo from "./components/Todo";
function App() {
  const todos = useSelector((state) => state.operationReducer);
  const dispatch = useDispatch();
  const [editFromVisibility, setEditFromVisibility] = useState(false);
  const [editTodoValue, setEditTodoValue] = useState("");
  const handelEditClick = (todo) => {
    setEditFromVisibility(true);
    setEditTodoValue(todo);
  };
  const cancelUpdate =()=>{
    setEditFromVisibility(false)
  }
  return (
    <div className="App">
      <div className="container">
        <div className="title">Todo List App </div>
        <div className="todo-box">
          <Form
            editFromVisibility={editFromVisibility}
            editTodoValue={editTodoValue}
            cancelUpdate={cancelUpdate}
          />
          <Todo
            handelEditClick={handelEditClick}
            editFromVisibility={editFromVisibility}
          />
          {todos.length > 1 && (
            <button
              onClick={() => {
                dispatch(deleteAll());
              }}
              className="deleteBtn"
            >
              Delete All
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
