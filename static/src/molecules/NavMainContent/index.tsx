import React, { ReactNode } from 'react';

interface Props {
  LiClass: string;
  layout: string;
  windowWidth: number;
  subContent: ReactNode;
}

const NavMainContent: React.FC<Props> = (props: Props) => {
  let MainContent;
  if (props.layout === 'horizontal') {
    MainContent = <li>{props.subContent}</li>;
  } else {
    if (props.windowWidth < 992) {
      MainContent = (
        <li className={props.LiClass ? props.LiClass : undefined}>
          {props.subContent}
        </li>
      );
    } else {
      MainContent = (
        <li className={props.LiClass ? props.LiClass : undefined}>
          {props.subContent}
        </li>
      );
    }
  }
  return MainContent;
};

export default NavMainContent;
