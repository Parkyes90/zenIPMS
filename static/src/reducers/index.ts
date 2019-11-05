import { combineReducers } from 'redux';
import numberCollectionReducer, {
  NumberCollectionState,
} from './numberCollection.reducer';

export interface State {
  numberCollectionReducer: NumberCollectionState;
}

export default combineReducers<State>({
  numberCollectionReducer,
});
