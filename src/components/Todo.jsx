import { useSelector, useDispatch } from "react-redux";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { removeTodoItem,handleCheckBox } from "../redux/todoapp/actions";
const Todo = (props) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  return todos.map((todo) => (
    <div key={todo.id} className="todo">
      <div className="todo-lists">
        {props.editFromVisibility === false && (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(handleCheckBox(todo.id))}
          />
        )}
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="action-box">
        {props.editFromVisibility === false && (
          <>
            <span
              className="icon"
              id="trash"
              onClick={() => dispatch(removeTodoItem(todo.id))}
            >
              <i className="fa fa-trash"></i>
            </span>
            <span
              className="icon"
              id="edit"
              onClick={() => props.handelEditClick(todo)}
            >
              <i className="fa fa-edit"></i>
            </span>
          </>
        )}
      </div>
    </div>
  ));
};

export default Todo;
