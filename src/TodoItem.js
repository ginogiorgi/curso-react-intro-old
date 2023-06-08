import "./TodoItem.css"
import { CompleteIcon } from "./CompleteIcon"
import { DeleteIcon } from "./DeleteIcon"

function TodoItems(props) {
    return (
      <li className="TodoItem">
        <CompleteIcon />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <DeleteIcon />
      </li>
    );
  };

export { TodoItems } 

