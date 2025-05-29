import { useTodoDispatch } from '../hooks/use-todo-dispatch';
import type { Todo } from '../types';

interface TodoItemProps extends Todo {}

const TodoItem = ({ id, content }: TodoItemProps) => {
  const dispatch = useTodoDispatch();

  return (
    <div>
      {content}
      <button onClick={() => dispatch.deleteTodo(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
