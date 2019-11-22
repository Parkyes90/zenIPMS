import React from 'react';
import ThemeSetting from './presenter';
import {
  layOutType,
  colorIcon,
  fixedMEnu,
  fixedHeader,
  layoutBox,
  layoutRtl,
  menuDropDownIcon,
  menuListStyle,
  menuActiveColor,
  menuTitleColor,
  hideCaption,
  hideBreadcrumb,
  headerBg,
  bgBrand,
  bgMenu,
  bgGradient,
  bgPattern,
  bgImage,
  resetTemplate,
} from 'reducers/configure/actions';
import { ConfigureState } from '../../reducers/configure';
import { connect } from 'react-redux';

const body = (layout: string): string => {
  if (layout === 'dark') {
    document.body.classList.add('dark-demo');
  } else {
    document.body.classList.remove('dark-demo');
  }
  return layout;
};

const boXLayOutMake = (isBoxLayout: boolean): void => {
  if (isBoxLayout) {
    document.body.classList.add('container');
  } else {
    document.body.classList.remove('container');
  }
  if (isBoxLayout) {
    document.body.classList.add('box-layout');
  } else {
    document.body.classList.remove('box-layout');
  }
};

const rtlLayOutMake = (isRTL: boolean): void => {
  if (isRTL) {
    document.body.classList.add('rtl-layout');
  } else {
    document.body.classList.remove('rtl-layout');
  }
};

const mapStateToProps = ({
  configureReducer,
}: {
  configureReducer: ConfigureState;
}): ConfigureState => {
  boXLayOutMake(configureReducer.boxLayout);
  rtlLayOutMake(configureReducer.rtl);
  return {
    ...configureReducer,
  };
};

const mapDispatchToProps = {
  layOutType,
  colorIcon,
  fixedMEnu,
  fixedHeader,
  layoutBox,
  layoutRtl,
  menuDropDownIcon,
  menuListStyle,
  menuActiveColor,
  menuTitleColor,
  hideCaption,
  hideBreadcrumb,
  doHeaderBg: headerBg,
  bgBrand,
  bgMenu,
  bgGradient,
  bgPattern,
  bgImage,
  resetTemplate,
};

export interface DisPatchProps {
  layOutType: (payload: string) => void;
  colorIcon: () => void;
  fixedMEnu: () => void;
  fixedHeader: () => void;
  layoutBox: () => void;
  layoutRtl: () => void;
  menuDropDownIcon: (payload: string) => void;
  menuListStyle: (payload: string) => void;
  menuActiveColor: (payload: string) => void;
  menuTitleColor: (payload: string) => void;
  hideCaption: () => void;
  hideBreadcrumb: () => void;
  doHeaderBg: (payload: string) => void;
  bgBrand: (payload: string) => void;
  bgMenu: (payload: string) => void;
  bgGradient: (payload: string) => void;
  bgPattern: (payload: string) => void;
  bgImage: (payload: string) => void;
  resetTemplate: () => void;
}

const ThemeSettingContainer: React.FC<ConfigureState & DisPatchProps> = (
  props: ConfigureState & DisPatchProps,
) => {
  return <ThemeSetting {...props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThemeSettingContainer);
