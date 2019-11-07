import { combineReducers } from 'redux';
import todosReducer, { TodosState } from './todos';

export interface State {
  todosReducer: TodosState;
}

const rootReducer = combineReducers<State>({
  todosReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
