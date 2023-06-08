import { TodoIcon } from "./TodoIcon"

function CompleteIcon(props) {
    return (
        // <span
        // className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        // onClick={props.onComplete}>
            <TodoIcon type="check" color="gray"/>
        // </span>
    );
};

export { CompleteIcon }