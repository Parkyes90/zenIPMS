import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
}

const Nav: React.FC<Props> = (props: Props) => {
  return (
    <nav
      className={classNames('pcoded-navbar', {
        'navbar-collapsed': false,
        'menu-light': true,
        'navbar-dark': true,
        'icon-colored': true,
        'menupos-fixed': true,
        'drp-icon-style2': true,
        'drp-icon-style3': false,
        'menu-item-icon-style2': true,
        'menu-item-icon-style3': false,
        'menu-item-icon-style4': false,
        'menu-item-icon-style5': false,
        'menu-item-icon-style6': false,
        'active-blue': true,
        'active-red': false,
        'active-purple': false,
        'active-info': false,
        'active-dark': false,
        'title-blue': true,
        'title-red': false,
        'title-purple': false,
        'title-info': false,
        'title-dark': false,
        'caption-hide': false,
        'header-hide': false,
        'brand-blue': true,
        'brand-red': false,
        'brand-purple': false,
        'brand-info': false,
        'brand-dark': false,
        'brand-dark navbar-blue': true,
        'brand-dark navbar-red': false,
        'brand-dark navbar-purple': false,
        'brand-dark navbar-info': false,
        'brand-dark navbar-dark': false,
        'navbar-gradient-blue': true,
        'navbar-gradient-red': false,
        'navbar-gradient-purple': false,
        'navbar-gradient-info': false,
        'navbar-gradient-dark': false,
        'navbar-pattern-1': true,
        'navbar-pattern-2': false,
        'navbar-pattern-3': false,
        'navbar-pattern-4': false,
        'navbar-pattern-5': false,
        'navbar-pattern-6': false,
        'navbar-image-1': true,
        'navbar-image-2': false,
        'navbar-image-3': false,
        'navbar-image-4': false,
        'navbar-image-5': false,
        'mob-open': true,
        'theme-horizontal default': false,
      })}
    >
      {props.children}
    </nav>
  );
};

export default Nav;
