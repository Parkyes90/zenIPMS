import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { configure } from 'configure';

interface Props {
  collapseMenu: boolean;
  doCollapseMenu: () => void;
}

const NavLogo: React.FC<Props> = (props: Props) => (
  <div className="navbar-brand header-logo">
    <Link to={configure.defaultPath} className="b-brand">
      <div className="b-bg">Z</div>
      <span className="b-title">Zen IPMS</span>
    </Link>
    <Link
      to="#"
      onClick={props.doCollapseMenu}
      className={classnames('mobile-menu', {
        on: props.collapseMenu,
      })}
    >
      <span />
    </Link>
  </div>
);

export default NavLogo;
