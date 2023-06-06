import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodobutton';
import React from 'react';

const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Ir a la comicon", completed: true},
  {text: "Cortar pasto", completed: false},
  {text: "Hacer tareas de la UTN", completed: true},
  {text: "Mirar cualquier película que no sea el señor de los anillos!", completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log(searchValue);
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => <TodoItems key={todo.text} text={todo.text} completed={todo.completed} />)}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
