import React from 'react';
import SideBar from 'organisms/SideBar';
import RouteTest from 'organisms/RouteTest';

const MainPage: React.FC = () => (
  <>
    <SideBar
      type="sideBar"
      layout="vertical"
      id="sideBar"
      chaildLi=""
      chaildLiA=""
      isOpen={[]}
      isTrigger={[]}
      navCollapseToggle={(id: string, type: string) => console.log(id, type)}
      navCollapseLeave={(id: string, type: string) => console.log(id, type)}
      navContentLeave={() => console.log('leave')}
    />
  </>
);

export default MainPage;
