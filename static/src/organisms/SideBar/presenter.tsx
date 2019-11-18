/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactElement, useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Nav from 'atoms/Nav';
import NavWrapper from 'atoms/NavWrapper';
import NavLogo from 'atoms/NavLogo';
import NavContent from 'molecules/NavContent';
import menu from 'routes/menu';
import withSizes, { Sizes } from 'react-sizes';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { ConfigureState, collapseMenu } from 'reducers/configure';
import { connect } from 'react-redux';
import { NavigationState, leaveContent } from 'reducers/navigation';

interface Props extends Sizes, NavigationState, ConfigureState {
  type: string;
  id: string;
  chaildLi: string;
  chaildLiA: string;
  navCollapseToggle: (id: string, type: string) => void;
  navCollapseLeave: (id: string, type: string) => void;
  navContentLeave: () => void;
  doCollapseMenu: () => void;
}

const SideBar: React.FC<Props & RouteComponentProps> = (
  props: Props & RouteComponentProps,
) => {
  const [prevDisable, setPrevDisable] = useState(true);
  const [nextDisable, setNextDisable] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const scrollPrevHandler: () => void = () => {
    const wrapperWidth = document.getElementById('sidenav-wrapper')!
      .clientWidth;

    const wrapperScrollWidth = scrollWidth - wrapperWidth;
    if (wrapperScrollWidth < 0) {
      setPrevDisable(true);
      setNextDisable(false);
      setScrollWidth(0);
    } else {
      setPrevDisable(false);
      setScrollWidth(wrapperScrollWidth);
    }
  };

  const scrollNextHandler: () => void = () => {
    const wrapperWidth = document.getElementById('sidenav-wrapper')!
      .clientWidth;
    const contentWidth = document.getElementById('sidenav-horizontal')!
      .clientWidth;

    let wrapperScrollWidth: number = scrollWidth + (wrapperWidth - 80);
    if (wrapperScrollWidth > contentWidth - wrapperWidth) {
      wrapperScrollWidth = contentWidth - wrapperWidth + 80;
      setPrevDisable(false);
      setNextDisable(true);
      setScrollWidth(wrapperScrollWidth);
    } else {
      setPrevDisable(false);
      setScrollWidth(wrapperScrollWidth);
    }
  };

  useEffect(() => {
    if (props.width < 1200 && props.width > 991) {
      if (!props.collapseMenu) {
        props.doCollapseMenu();
      }
    }
  });
  let MainContent: ReactElement;

  if (props.layout === 'horizontal') {
    let prevClass: string[] = ['sidenav-horizontal-prev'];
    let nextClass: string[] = ['sidenav-horizontal-next'];

    if (prevDisable) {
      prevClass = [...prevClass, 'disabled'];
    }
    if (nextDisable) {
      nextClass = [...nextClass, 'disabled'];
    }
    MainContent = (
      <div
        className="navbar-content sidenav-horizontal sidenav"
        id="layout-sidenav"
      >
        <Link
          to="#"
          className={prevClass.join(' ')}
          onClick={scrollPrevHandler}
        >
          <span />
        </Link>
        <div id="sidenav-wrapper" className="sidenav-horizontal-wrapper">
          <ul
            id="sidenav-horizontal"
            className="nav pcoded-inner-navbar sidenav-inner"
            onMouseLeave={(): void => props.navContentLeave()}
            style={{ marginLeft: '-' + scrollWidth + 'px' }}
          >
            <NavContent
              navigation={menu}
              parentLi="nav-item"
              parentLiA="nav-link"
              parentUi=""
              parentLiCa="nav-item pcoded-menu-caption"
              toggleCls="pcoded-hasmenu"
              activeToggle={['pcoded-trigger']}
              collapesTitle="nav-link"
              subUi="pcoded-submenu"
              {...props}
            />
          </ul>
        </div>
        <Link
          to="#"
          className={nextClass.join(' ')}
          onClick={scrollNextHandler}
        >
          <span />
        </Link>
      </div>
    );
  } else {
    MainContent = (
      <PerfectScrollbar className="scroll-div navbar-content">
        <NavContent
          navigation={menu}
          parentUi="nav pcoded-inner-navbar"
          parentLi="nav-item"
          parentLiA="nav-link"
          parentLiCa="nav-item pcoded-menu-caption"
          toggleCls="nav-item pcoded-hasmenu"
          activeToggle={['pcoded-trigger']}
          collapesTitle="nav-link"
          subUi="pcoded-submenu"
          {...props}
        />
      </PerfectScrollbar>
    );
  }

  return (
    <Nav {...props}>
      <NavWrapper prebuildLayout={props.prebuildLayout}>
        <NavLogo
          collapseMenu={props.collapseMenu}
          doCollapseMenu={props.doCollapseMenu}
        />
        {MainContent}
      </NavWrapper>
    </Nav>
  );
};

const mapSizesToProps = (sizes: Partial<Sizes>): Partial<Sizes> => sizes;

const mapStateToProps = ({
  configureReducer,
  navigationReducer,
}: {
  configureReducer: ConfigureState;
  navigationReducer: NavigationState;
}): ConfigureState & NavigationState => {
  return { ...configureReducer, ...navigationReducer };
};

const mapDispatchToProps = {
  doCollapseMenu: collapseMenu,
  navContentLeave: leaveContent,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withSizes<Partial<Sizes>, Props>(mapSizesToProps)(withRouter(SideBar)));
