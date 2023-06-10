import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItem';
import { CreateTodoButton } from './CreateTodobutton';
import React from 'react';

// const defaultTodos = [
//   {text: "Cortar cebolla", completed: false},
//   {text: "Ir a la comicon", completed: true},
//   {text: "Cortar pasto", completed: false},
//   {text: "Hacer tareas de la UTN", completed: true},
//   {text: "Mirar cualquier película que no sea el señor de los anillos!", completed: false},
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const saveTodos = (newTodos) => {
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
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
}

export default App;
