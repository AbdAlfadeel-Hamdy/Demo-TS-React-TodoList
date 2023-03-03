import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (title: string): void => {
    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { id: Math.random().toString(), title },
    ]);
  };
  const todoDeleteHandler = (todoId: string): void => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((todo: Todo) => todo.id !== todoId)
    );
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
