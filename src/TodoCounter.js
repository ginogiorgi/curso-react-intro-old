import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
    return (
        total === completed 
        ?
            <h1 className="TodoCounter">
            No posees To Do 's !
            </h1>
        :
            <h1 className="TodoCounter">
            Has completetado <span>{completed}</span> de <span>{total}</span> To Do 's
            </h1>
        
    );
};

export { TodoCounter }
