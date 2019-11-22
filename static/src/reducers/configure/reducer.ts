import { createReducer } from 'typesafe-actions';
import { ConfigureState, ConfigureAction } from './types';
import * as actions from './actions';
import { configure } from 'configure';

const initialState: ConfigureState = {
  layout: configure.layout,
  layoutType: configure.layoutType,
  menuDropdownIcon: configure.menuDropdownIcon,
  menuListIcon: configure.menuListIcon,
  menuActiveColor: configure.menuActiveColor,
  menuTitleColor: configure.menuTitleColor,
  headerBg: configure.headerBg,
  brandBg: configure.brandBg,
  menuBg: configure.menuBg,
  menuBgGradient: configure.menuBgGradient,
  menuBgPattern: configure.menuBgPattern,
  menuBgImage: configure.menuBgImage,
  configBlock: configure.configBlock,
  prebuildLayout: configure.prebuildLayout,
  collapseMenu: configure.collapseMenu,
  iconColor: configure.iconColor,
  menuFixed: configure.menuFixed,
  headerFixed: configure.fixedHeader,
  boxLayout: configure.boxLayout,
  rtl: configure.rtl,
  hideCaption: configure.hideCaption,
  headerBreadcrumbHide: configure.headerBreadcrumbHide,
  resMenu: false,
};

const configureReducer = createReducer<ConfigureState, ConfigureAction>(
  initialState,
  {
    [actions.LAYOUT]: (state, { payload: layout }) => {
      return {
        ...state,
        layout,
      };
    },
    [actions.LAYOUT_TYPE]: (state, { payload: layout }) => {
      return {
        ...state,
        layoutType: layout,
      };
    },
    [actions.COLLAPSE_MENU]: (state) => {
      return {
        ...state,
        collapseMenu: !state.collapseMenu,
      };
    },
    [actions.ON_ITEM_CLICK]: (state) => {
      return {
        ...state,
        resMenu: false,
      };
    },
    [actions.COLLAPSE_MENU_RES]: (state) => {
      return {
        ...state,
        resMenu: !state.resMenu,
      };
    },
    [actions.COLOR_ICON]: (state) => {
      return {
        ...state,
        iconColor: !state.iconColor,
      };
    },
    [actions.MENU_FIXED]: (state) => {
      return {
        ...state,
        menuFixed: !state.menuFixed,
      };
    },
    [actions.HEADER_FIXED]: (state) => {
      return {
        ...state,
        headerFixed: !state.headerFixed,
      };
    },
    [actions.BOX_LAYOUT]: (state) => {
      return {
        ...state,
        boxLayout: !state.boxLayout,
      };
    },
    [actions.RTL]: (state) => {
      return {
        ...state,
        rtl: !state.rtl,
      };
    },
    [actions.MENU_DROPDOWN_ICON]: (state, { payload: layout }) => {
      return {
        ...state,
        menuDropdownIcon: layout,
      };
    },
    [actions.MENU_LIST_STYLE]: (state, { payload: layout }) => {
      return {
        ...state,
        menuListIcon: layout,
      };
    },
    [actions.MENU_ACTIVE_COLOR]: (state, { payload: layout }) => {
      return {
        ...state,
        menuActiveColor: layout,
      };
    },
    [actions.MENU_TITLE_COLOR]: (state, { payload: layout }) => {
      return {
        ...state,
        menuTitleColor: layout,
      };
    },
    [actions.HIDE_CAPTION]: (state) => {
      return {
        ...state,
        hideCaption: !state.hideCaption,
      };
    },
    [actions.HEADER_BREADCRUMB_HIDE]: (state) => {
      return {
        ...state,
        headerBreadcrumbHide: !state.headerBreadcrumbHide,
      };
    },
    [actions.HEADER_BACKGROUND]: (state, { payload: layout }) => {
      return {
        ...state,
        headerBg: layout,
      };
    },
    [actions.PREBUILD_LAYOUT]: (state, { payload: layout }) => {
      return {
        ...state,
        prebuildLayout: layout,
      };
    },
    [actions.BRAND_BACKGROUND]: (state, { payload: layout }) => {
      return {
        ...state,
        brandBg: layout,
      };
    },
    [actions.MENU_BACKGROUND]: (state, { payload: layout }) => {
      return {
        ...state,
        menuBg: layout,
        menuBgImage: '',
        menuBgPattern: '',
        menuBgGradient: '',
      };
    },
    [actions.MENU_BACKGROUND_GRADIENT]: (state, { payload: layout }) => {
      return {
        ...state,
        menuBgGradient: layout,
        menuBgImage: '',
        menuBgPattern: '',
        menuBg: '',
      };
    },
    [actions.MENU_BACKGROUND_PATTERN]: (state, { payload: layout }) => {
      return {
        ...state,
        menuBgPattern: layout,
        menuBgImage: '',
        menuBgGradient: '',
        menuBg: '',
      };
    },
    [actions.CONFIG_BLOCK]: (state) => {
      return {
        ...state,
        configBlock: !state.configBlock,
      };
    },
    [actions.MENU_BACKGROUND_IMAGE]: (state, { payload: layout }) => {
      return {
        ...state,
        menuBgImage: layout,
        menuBgPattern: '',
        menuBgGradient: '',
        menuBg: '',
      };
    },
    [actions.RESET]: () => {
      return {
        ...initialState,
      };
    },
  },
);

export default configureReducer;
