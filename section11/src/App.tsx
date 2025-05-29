import { useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import type { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const idRef = useRef(0);

  const addTodo = (text: string) => {
    const newTodo = {
      id: idRef.current++,
      content: text,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (targetId: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== targetId);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} onClick={deleteTodo} />;
      })}
    </div>
  );
}

export default App;
