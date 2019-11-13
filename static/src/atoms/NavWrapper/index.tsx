import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
}

const NavWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={classNames('navbar-wrapper', {
        container: false,
      })}
    >
      {props.children}
    </div>
  );
};

export default NavWrapper;
