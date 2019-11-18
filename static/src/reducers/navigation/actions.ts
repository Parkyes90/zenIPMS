import { createAction } from 'typesafe-actions';
import { Collapse } from './types';

export const LEAVE_COLLAPSE = 'navigation/LEAVE_COLLAPSE';
export const LEAVE_CONTENT = 'navigation/LEAVE_CONTENT';
export const TOGGLE_COLLAPSE = 'navigation/TOGGLE_COLLAPSE';
export const UPDATE_TEXT = 'navigation/UPDATE_TEXT';

export const leaveCollapse = createAction(LEAVE_COLLAPSE)<Collapse>();
export const leaveContent = createAction(LEAVE_CONTENT)();
export const toggleCollapse = createAction(TOGGLE_COLLAPSE)<Collapse>();
export const updateText = createAction(UPDATE_TEXT)<string>();
