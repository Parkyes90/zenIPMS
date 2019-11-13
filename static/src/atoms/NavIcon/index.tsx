import React from 'react';

interface Props {
  item: {
    icon?: string;
  };
}

const NavIcon: React.FC<Props> = (props: Props) => {
  return props.item.icon ? (
    <span className="pcoded-micon">
      <i className={props.item.icon} />
    </span>
  ) : null;
};

export default NavIcon;
