import { TodoIcon } from "./TodoIcon"

function CompleteIcon({ completed, onComplete }) {
    return (
        // <span
        // className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        // onClick={props.onComplete}>
            <TodoIcon
            type="check"
            color={completed ? "green" : "gray"}
            onClick={onComplete} />
        // </span>
    );
};

export { CompleteIcon }