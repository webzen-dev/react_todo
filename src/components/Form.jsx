import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem , handleEditSubmit} from "../redux/todoapp/actions";
const Form = ({ editTodoValue, editFromVisibility, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const [editvalue, setEditValue] = useState("");
  const handleSubmit = (e) => {
    let date = new Date().getTime();
    e.preventDefault();
    let todoObject = {
      id: date,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodoItem(todoObject));
  };
  useEffect(() => {
    setEditValue(editTodoValue.todo);
  }, [editTodoValue]);
  const editSubmit = (e) => {
    e.preventDefault();
    let editedObj = {
      id: editTodoValue.id,
      todo: editvalue,
      completed: false,
    };
    dispatch(handleEditSubmit(editedObj));
  };
  return (
    <>
      {editFromVisibility === false ? (
        <form className="form-todo" onSubmit={handleSubmit}>
          <div className="text-lable">Add Your Todo Item :</div>
          <div className="todo-input">
            <input
              type="text"
              id="todo-input-form"
              required
              value={todoValue}
              onChange={(event) => setTodoValue(event.target.value)}
            />
            <button type="submit">
              add <i className="fa fa-plus-square-o"></i>
            </button>
          </div>
        </form>
      ) : (
        <form className="form-todo" onSubmit={editSubmit}>
          <div className="text-lable">Update Your Todo Item :</div>
          <div className="todo-input">
            <input
              type="text"
              id="todo-input-form"
              required
              value={editvalue || ""}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <button type="submit" style={{ background: "green" }}>
              update
            </button>
          </div>
          <button id="BackBtn" type="button" onClick={cancelUpdate}>
            back
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
