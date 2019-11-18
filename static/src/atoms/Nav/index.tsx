import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { ConfigureState } from '../../reducers/configure';

interface Props {
  children: ReactNode;
}

const Nav: React.FC<Props & ConfigureState> = (
  props: Props & ConfigureState,
) => {
  return (
    <nav
      className={classNames('pcoded-navbar', {
        'navbar-collapsed': props.collapseMenu,
        'menu-light': props.layoutType === 'light' || props.menuBg === 'light',
        'navbar-dark': props.layoutType === 'dark',
        'icon-colored': props.iconColor,
        'menupos-fixed': props.menuFixed && props.layout === 'vertical',
        'drp-icon-style2': props.menuDropdownIcon === 'style2',
        'drp-icon-style3': props.menuDropdownIcon === 'style3',
        'menu-item-icon-style2': props.menuListIcon === 'style2',
        'menu-item-icon-style3': props.menuListIcon === 'style3',
        'menu-item-icon-style4': props.menuListIcon === 'style4',
        'menu-item-icon-style5': props.menuListIcon === 'style5',
        'menu-item-icon-style6': props.menuListIcon === 'style6',
        'active-blue': props.menuActiveColor === 'blue',
        'active-red': props.menuActiveColor === 'red',
        'active-purple': props.menuActiveColor === 'purple',
        'active-info': props.menuActiveColor === 'info',
        'active-dark': props.menuActiveColor === 'dark',
        'title-blue': props.menuTitleColor === 'blue',
        'title-red': props.menuTitleColor === 'red',
        'title-purple': props.menuTitleColor === 'purple',
        'title-info': props.menuTitleColor === 'info',
        'title-dark': props.menuTitleColor === 'dark',
        'caption-hide': props.hideCaption,
        'header-hide': props.headerBreadcrumbHide,
        'brand-blue': props.brandBg === 'blue',
        'brand-red': props.brandBg === 'red',
        'brand-purple': props.brandBg === 'purple',
        'brand-info': props.brandBg === 'info',
        'brand-dark': props.brandBg === 'dark',
        'brand-dark navbar-blue': props.menuBg === 'blue',
        'brand-dark navbar-red': props.menuBg === 'red',
        'brand-dark navbar-purple': props.menuBg === 'purple',
        'brand-dark navbar-info': props.menuBg === 'info',
        'brand-dark navbar-dark': props.menuBg === 'dark',
        'navbar-gradient-blue': props.menuBgGradient === 'blue',
        'navbar-gradient-red': props.menuBgGradient === 'red',
        'navbar-gradient-purple': props.menuBgGradient === 'purple',
        'navbar-gradient-info': props.menuBgGradient === 'info',
        'navbar-gradient-dark': props.menuBgGradient === 'dark',
        'navbar-pattern-1': props.menuBgPattern === 'pt1',
        'navbar-pattern-2': props.menuBgPattern === 'pt2',
        'navbar-pattern-3': props.menuBgPattern === 'pt3',
        'navbar-pattern-4': props.menuBgPattern === 'pt4',
        'navbar-pattern-5': props.menuBgPattern === 'pt5',
        'navbar-pattern-6': props.menuBgPattern === 'pt6',
        'navbar-image-1': props.menuBgImage === 'img1',
        'navbar-image-2': props.menuBgImage === 'img2',
        'navbar-image-3': props.menuBgImage === 'img3',
        'navbar-image-4': props.menuBgImage === 'img4',
        'navbar-image-5': props.menuBgImage === 'img5',
        'mob-open': props.resMenu,
        'theme-horizontal default': props.layout === 'horizontal',
      })}
    >
      {props.children}
    </nav>
  );
};

export default Nav;
