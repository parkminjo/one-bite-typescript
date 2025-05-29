import type { Todo } from '../types';

interface TodoItemProps extends Todo {
  deleteTodo: (targetId: number) => void;
}

const TodoItem = ({ id, content, deleteTodo }: TodoItemProps) => {
  return (
    <div>
      {content}
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
