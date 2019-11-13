import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { configure } from 'configure';

const NavLogo: React.FC = () => (
  <div className="navbar-brand header-logo">
    <Link to={configure.defaultPath} className="b-brand">
      <div className="b-bg">Z</div>
      <span className="b-title">Zen IPMS</span>
    </Link>
    <Link
      to="#"
      onClick={() => {
        console.log('collapse');
      }}
      className={classnames('mobile-menu', {
        on: false,
      })}
    >
      <span />
    </Link>
  </div>
);

export default NavLogo;
