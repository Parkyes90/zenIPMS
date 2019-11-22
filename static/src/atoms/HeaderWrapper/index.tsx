import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  headerFixed?: boolean;
  bgHeader: string;
}

const HeaderWrapper: React.FC<Props> = (props: Props) => {
  return (
    <header
      className={classNames(
        'navbar pcoded-header navbar-expand-lg navbar-light',
        {
          'headerpos-fixed': props.headerFixed,
          'header-blue': props.bgHeader === 'blue',
          'header-red': props.bgHeader === 'red',
          'header-purple': props.bgHeader === 'purple',
          'header-info': props.bgHeader === 'info',
          'header-dark': props.bgHeader === 'dark',
        },
      )}
    >
      {props.children}
    </header>
  );
};

export default HeaderWrapper;
