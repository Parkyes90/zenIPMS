import { combineReducers } from 'redux';
import numberCollectionReducer, {
  NumberCollectionState,
} from './numberCollection.reducer';
import counterReducer, { CounterState } from '../reducers/counter.reducer';

export interface State {
  numberCollectionReducer: NumberCollectionState;
  counterReducer: CounterState;
}

const rootReducer = combineReducers<State>({
  numberCollectionReducer,
  counterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
