import { useReducer, useRef, useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import type { Todo } from './types';

type Action =
  | {
      type: 'CREATE';
      data: Todo;
    }
  | { type: 'DELETE'; targetId: number };

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'CREATE':
      return [...state, action.data];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.targetId);
    default:
      return state;
  }
};

function App() {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const addTodo = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const deleteTodo = (targetId: number) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
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
