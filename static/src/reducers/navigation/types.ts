import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type NavigationAction = ActionType<typeof actions>;

export type NavigationState = {
  isOpen: string[];
  isTrigger: string[];
  navUpdate: string;
};

export type Collapse = {
  id: string;
  menu: string;
};
