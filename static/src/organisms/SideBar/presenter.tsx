import React, { ReactElement } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Nav from 'atoms/Nav';
import NavWrapper from 'atoms/NavWrapper';
import NavLogo from 'atoms/NavLogo';

const SideBar: React.FC = () => {
  const MainContent: ReactElement = (
    <PerfectScrollbar className="scroll-div navbar-content">
      asd
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

export default SideBar;
