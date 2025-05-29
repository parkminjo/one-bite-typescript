import { useContext } from 'react';
import { TodoDispatchContext } from '../App';

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('TodoDispatch에 문제가 있습니다.');

  return dispatch;
};
