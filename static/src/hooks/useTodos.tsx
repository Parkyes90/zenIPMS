import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todosReducer);
  return todos;
}
