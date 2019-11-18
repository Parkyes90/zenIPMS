import { createAction } from 'typesafe-actions';

export const LAYOUT = 'configure/LAYOUT';
export const LAYOUT_TYPE = 'configure/LAYOUT_TYPE';
export const COLLAPSE_MENU_RES = 'configure/COLLAPSE_MENU_RES';
export const COLLAPSE_MENU = 'configure/COLLAPSE_MENU';
export const ON_ITEM_CLICK = 'configure/ON_ITEM_CLICK';
export const COLOR_ICON = 'configure/COLOR_ICON';
export const MENU_FIXED = 'configure/MENU_FIXED';
export const HEADER_FIXED = 'configure/HEADER_FIXED';
export const BOX_LAYOUT = 'configure/BOX_LAYOUT';
export const RTL = 'configure/RTL';
export const MENU_DROPDOWN_ICON = 'configure/MENU_DROPDOWN_ICON';
export const MENU_LIST_STYLE = 'configure/MENU_LIST_STYLE';
export const MENU_ACTIVE_COLOR = 'configure/MENU_ACTIVE_COLOR';
export const MENU_TITLE_COLOR = 'configure/MENU_TITLE_COLOR';
export const HIDE_CAPTION = 'configure/HIDE_CAPTION';
export const HEADER_BREADCRUMB_HIDE = 'configure/HEADER_BREADCRUMB_HIDE';
export const HEADER_BACKGROUND = 'configure/HEADER_BACKGROUND';
export const BRAND_BACKGROUND = 'configure/BRAND_BACKGROUND';
export const MENU_BACKGROUND_GRADIENT = 'configure/MENU_BACKGROUND_GRADIENT';
export const MENU_BACKGROUND_PATTERN = 'configure/MENU_BACKGROUND_PATTERN';
export const MENU_BACKGROUND_IMAGE = 'configure/MENU_BACKGROUND_IMAGE';
export const MENU_BACKGROUND = 'configure/MENU_BACKGROUND';
export const PREBUILD_LAYOUT = 'configure/PREBUILD_LAYOUT';
export const RESET = 'configure/RESET';
export const CONFIG_BLOCK = 'configure/CONFIG_BLOCK';

export const layOut = createAction(LAYOUT)<string>();
export const layOutType = createAction(LAYOUT_TYPE)<string>();
export const collapseMenuRes = createAction(COLLAPSE_MENU_RES)();
export const collapseMenu = createAction(COLLAPSE_MENU)();
export const onItemClick = createAction(ON_ITEM_CLICK)();
export const colorIcon = createAction(COLOR_ICON)();
export const fixedMEnu = createAction(MENU_FIXED)();
export const fixedHeader = createAction(HEADER_FIXED)();
export const layoutBox = createAction(BOX_LAYOUT)();
export const layoutRtl = createAction(RTL)();
export const menuDropDownIcon = createAction(MENU_DROPDOWN_ICON)<string>();
export const menuListStyle = createAction(MENU_LIST_STYLE)<string>();
export const menuActiveColor = createAction(MENU_ACTIVE_COLOR)<string>();
export const menuTitleColor = createAction(MENU_TITLE_COLOR)<string>();
export const hideCaption = createAction(HIDE_CAPTION)();
export const hideBreadcrumb = createAction(HEADER_BREADCRUMB_HIDE)();
export const headerBg = createAction(HEADER_BACKGROUND)<string>();
export const bgBrand = createAction(BRAND_BACKGROUND)<string>();
export const bgGradient = createAction(MENU_BACKGROUND_GRADIENT)<string>();
export const bgPattern = createAction(MENU_BACKGROUND_PATTERN)<string>();
export const bgImage = createAction(MENU_BACKGROUND_IMAGE)<string>();
export const bgMenu = createAction(MENU_BACKGROUND)<string>();
export const layoutPrebuild = createAction(PREBUILD_LAYOUT)<string>();
export const resetTemplate = createAction(RESET)();
export const configBlock = createAction(CONFIG_BLOCK)();