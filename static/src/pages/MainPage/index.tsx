import React from 'react';
import SideBar from 'organisms/SideBar';

const MainPage: React.FC = () => (
  <>
    <SideBar
      type="sideBar"
      id="sideBar"
      chaildLi=""
      width={0}
      height={0}
      chaildLiA=""
      navCollapseToggle={(id: string, type: string) => console.log(id, type)}
      navCollapseLeave={(id: string, type: string) => console.log(id, type)}
    />
  </>
);

export default MainPage;
