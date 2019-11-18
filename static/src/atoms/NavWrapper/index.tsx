import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface Props {
  children: ReactNode;
  prebuildLayout: string;
}

const NavWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={classNames('navbar-wrapper', {
        container: props.prebuildLayout,
      })}
    >
      {props.children}
    </div>
  );
};

export default NavWrapper;
