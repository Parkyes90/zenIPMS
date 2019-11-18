import { combineReducers } from 'redux';
import todosReducer, { TodosState } from './todos';
import navigationReducer, { NavigationState } from './navigation';
import configureReducer, { ConfigureState } from './configure';

export interface State {
  todosReducer: TodosState;
  navigationReducer: NavigationState;
  configureReducer: ConfigureState;
}

const rootReducer = combineReducers<State>({
  todosReducer,
  navigationReducer,
  configureReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
