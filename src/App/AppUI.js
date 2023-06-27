import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItems } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodobutton';

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo}) {
    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {searchedTodos.map(todo => (
            <TodoItems
              key={todo.text}
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
            ))}
          </TodoList>
          
          <CreateTodoButton />
        </>
      );
};

export { AppUI };
//