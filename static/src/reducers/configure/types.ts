import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ConfigureAction = ActionType<typeof actions>;

export type ConfigureState = {
  layout: string;
  layoutType: string;
  menuDropdownIcon: string;
  menuListIcon: string;
  menuActiveColor: string;
  menuTitleColor: string;
  headerBg: string;
  brandBg: string;
  menuBg: string;
  menuBgGradient: string;
  menuBgPattern: string;
  menuBgImage: string;
  configBlock: boolean;
  prebuildLayout: string;
  collapseMenu: boolean;
  iconColor: boolean;
  menuFixed: boolean;
  headerFixed: boolean;
  boxLayout: boolean;
  rtl: boolean;
  hideCaption: boolean;
  headerBreadcrumbHide: boolean;
  resMenu: boolean;
};
