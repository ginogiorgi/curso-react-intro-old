import { TodoIcon } from "./index.js"

function DeleteIcon({ onDelete }) {
    return (
        // <span 
        // className="Icon Icon-delete"
        // onClick={props.onDelete}>
            <TodoIcon
            type="delete"
            color="gray"
            onClick={onDelete} />
        // </span>
    );
};

export { DeleteIcon }