import { useState } from 'react';

interface EditorProps {
  addTodo: (text: string) => void;
}

const Editor = ({ addTodo }: EditorProps) => {
  const [text, setText] = useState('');

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onClickButton = () => {
    addTodo(text);
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
