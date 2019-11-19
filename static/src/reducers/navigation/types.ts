import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ReactElement } from 'react';

export type NavigationAction = ActionType<typeof actions>;

export type NavigationState = {
  isOpen: string[];
  isTrigger: string[];
  navUpdate: string | ReactElement;
};

export type Collapse = {
  id: string;
  menu: string;
};
