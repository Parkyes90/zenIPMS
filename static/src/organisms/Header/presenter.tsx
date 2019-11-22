import React, { useState } from 'react';
import { collapseMenuRes, ConfigureState } from 'reducers/configure';
import { connect } from 'react-redux';
import HeaderWrapper from 'atoms/HeaderWrapper';
import { Link } from 'react-router-dom';
import HeaderMobile from '../../molecules/HeaderMobile';
import withSizes, { Sizes } from 'react-sizes';
import { Row } from 'reactstrap';
import Breadcrumb from '../Breadcrumb';
import MainSearch from '../MainSearch';
import UserProfile from '../UserProfile';

interface Props extends Sizes, ConfigureState {
  collapseMenuRes: () => void;
}

const Header: React.FC<Props> = (props: Props) => {
  const [navOpen, setNavOpen] = useState(true);

  const toggle = (): void => {
    setNavOpen(!navOpen);
  };

  return (
    <HeaderWrapper headerFixed={props.headerFixed} bgHeader={props.headerBg}>
      <HeaderMobile
        collapseMenuRes={props.collapseMenuRes}
        resMenu={props.resMenu}
      />
      <Link to="#" className="mobile-menu" id="mobile-header">
        <i className="feather icon-more-horizontal" />
      </Link>
      <div className="collapse navbar-collapse">
        <Link onClick={toggle} className="mob-toggler" to="#" />
        {props.width < 992 ? (
          <>
            {props.layout !== 'horizontal' ? (
              <ul
                className="navbar-nav mr-auto"
                style={{ display: `${!navOpen ? `none` : ``}` }}
              >
                <li>
                  <div className="page-header">
                    <div className="page-block">
                      <Row className="align-items-center">
                        <Breadcrumb />
                      </Row>
                    </div>
                  </div>
                </li>
              </ul>
            ) : null}
            <ul
              className="navbar-nav ml-auto"
              style={{ display: `${navOpen ? `none` : `block`}` }}
            >
              <li className="nav-item">
                <MainSearch />
              </li>
              <li>
                <UserProfile />
              </li>
            </ul>
          </>
        ) : (
          <>
            {props.layout !== 'horizontal' ? (
              <ul className="navbar-nav mr-auto">
                <li>
                  <div className="page-header">
                    <div className="page-block">
                      <Row className="align-items-center">
                        <Breadcrumb />
                      </Row>
                    </div>
                  </div>
                </li>
              </ul>
            ) : null}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <MainSearch />
              </li>
              <li>
                <UserProfile />
              </li>
            </ul>
          </>
        )}
      </div>
    </HeaderWrapper>
  );
};

const mapDispatchToProps = {
  collapseMenuRes,
};

const mapStateToProps = ({
  configureReducer,
}: {
  configureReducer: ConfigureState;
}): ConfigureState => {
  return {
    ...configureReducer,
  };
};

const mapSizesToProps = (sizes: Partial<Sizes>): Partial<Sizes> => sizes;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withSizes<Partial<Sizes>, Props>(mapSizesToProps)(Header));
