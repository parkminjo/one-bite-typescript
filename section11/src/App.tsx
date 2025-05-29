import { createContext, useReducer, useRef } from 'react';
import Editor from './components/Editor';
import TodoItem from './components/TodoItem';
import './App.css';
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

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  addTodo: (text: string) => void;
  deleteTodo: (targetId: number) => void;
} | null>(null);

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
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={{ addTodo, deleteTodo }}>
        <div className="App">
          <h1>Todo</h1>
          <Editor />
          {todos.map((todo) => {
            return <TodoItem key={todo.id} {...todo} />;
          })}
        </div>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export default App;
