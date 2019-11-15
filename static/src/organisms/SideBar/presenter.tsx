import React, { ReactElement } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Nav from 'atoms/Nav';
import NavWrapper from 'atoms/NavWrapper';
import NavLogo from 'atoms/NavLogo';
import NavContent from 'molecules/NavContent';
import menu from 'routes/menu';
import withSizes, { Sizes } from 'react-sizes';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends Partial<Sizes> {
  type: string;
  layout: string;
  id: string;
  chaildLi: string;
  chaildLiA: string;
  navCollapseToggle: (id: string, type: string) => void;
  navCollapseLeave: (id: string, type: string) => void;
  navContentLeave: () => void;
  isOpen: string[];
  isTrigger: string[];
}

const SideBar: React.FC<Props & RouteComponentProps> = (props) => {
  const MainContent: ReactElement = (
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

  return (
    <Nav>
      <NavWrapper>
        <NavLogo />
        {MainContent}
      </NavWrapper>
    </Nav>
  );
};

const mapSizesToProps = (sizes: Partial<Sizes>): Partial<Sizes> => sizes;

export default withSizes<Partial<Sizes>, Props>(mapSizesToProps)(
  withRouter(SideBar),
);
