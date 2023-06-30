import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItems } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodobutton';

function AppUI({completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, loading, error}) {
    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos}/>
          <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Se pudrio pa</p>}
            {(!loading && searchedTodos.length === 0) && <p>Crea un To Do!</p>}
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