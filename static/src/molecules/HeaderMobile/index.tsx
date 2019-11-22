import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { configure } from 'configure';

interface Props {
  collapseMenuRes: () => void;
  resMenu: boolean;
}

const HeaderMobile: React.FC<Props> = (props: Props) => {
  return (
    <div className="m-header">
      <Link
        to="#"
        style={{ zIndex: 9999 }}
        onClick={props.collapseMenuRes}
        className={classNames('mobile-menu', {
          on: props.resMenu,
        })}
      >
        <span />
      </Link>
      <Link to={configure.defaultPath} className="b-brand">
        <div className="b-bg">Z</div>
        <span className="b-title">Zen IPMS</span>
      </Link>
    </div>
  );
};

export default HeaderMobile;
