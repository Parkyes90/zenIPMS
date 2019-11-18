import { createReducer } from 'typesafe-actions';
import { NavigationState, NavigationAction } from './types';
import {
  LEAVE_CONTENT,
  LEAVE_COLLAPSE,
  TOGGLE_COLLAPSE,
  UPDATE_TEXT,
} from './actions';

const initialState: NavigationState = {
  isOpen: [],
  isTrigger: [],
  navUpdate: '',
};

const navigation = createReducer<NavigationState, NavigationAction>(
  initialState,
  {
    [TOGGLE_COLLAPSE]: (state, { payload: { id, menu } }) => {
      const { isOpen, isTrigger } = state;
      const triggerIndex = isTrigger.indexOf(id);

      if (menu === 'sub') {
        if (triggerIndex > -1) {
          return {
            ...state,
            isOpen: isOpen.filter((item) => item !== id),
            isTrigger: isTrigger.filter((item) => item !== id),
          };
        }
        return {
          ...state,
          isOpen: [...isOpen, id],
          isTrigger: [...isTrigger, id],
        };
      }
      return {
        ...state,
        isOpen: triggerIndex !== -1 ? [id] : [],
        isTrigger: triggerIndex !== -1 ? [id] : [],
      };
    },
    [LEAVE_CONTENT]: (state) => {
      return {
        ...state,
        isOpen: [],
        isTrigger: [],
      };
    },
    [LEAVE_COLLAPSE]: (state, { payload: { id, menu } }) => {
      const { isOpen, isTrigger } = state;
      const triggerIndex = isTrigger.indexOf(id);
      if (menu === 'sub') {
        if (triggerIndex > -1) {
          return {
            ...state,
            isOpen: isOpen.filter((item) => item !== id),
            isTrigger: isTrigger.filter((item) => item !== id),
          };
        }
      }
      return {
        ...state,
      };
    },
    [UPDATE_TEXT]: (state, { payload: text }) => {
      return {
        ...state,
        navUpdate: text,
      };
    },
  },
);

export default navigation;
