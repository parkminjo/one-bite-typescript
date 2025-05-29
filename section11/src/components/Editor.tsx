import { useState } from 'react';
import { useTodoDispatch } from '../hooks/use-todo-dispatch';

const Editor = () => {
  const [text, setText] = useState('');
  const dispatch = useTodoDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickButton = () => {
    dispatch.addTodo(text);
    setText('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={onChangeInput}
      />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
};

export default Editor;
