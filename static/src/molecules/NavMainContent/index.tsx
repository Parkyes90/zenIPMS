import React, { ReactNode } from 'react';
import { onItemClick } from '../../reducers/configure';

interface Props {
  LiClass: string;
  layout: string;
  windowWidth: number;
  subContent: ReactNode;
  onItemClick: () => void;
  leaveContent: () => void;
}

const NavMainContent: React.FC<Props> = (props: Props) => {
  let MainContent;
  if (props.layout === 'horizontal') {
    MainContent = <li onClick={props.leaveContent}>{props.subContent}</li>;
  } else {
    if (props.windowWidth < 992) {
      MainContent = (
        <li
          className={props.LiClass ? props.LiClass : undefined}
          onClick={props.onItemClick}
        >
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
