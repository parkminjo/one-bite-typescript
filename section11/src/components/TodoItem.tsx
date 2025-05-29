import type { Todo } from '../types';

interface TodoItemProps extends Todo {
  onClick: (targetId: number) => void;
}

const TodoItem = ({ id, content, onClick }: TodoItemProps) => {
  return (
    <div>
      {content}
      <button onClick={() => onClick(id)}>삭제</button>
    </div>
  );
};

export default TodoItem;
