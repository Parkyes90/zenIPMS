import React from 'react';

interface Props {
  item: {
    badge?: {
      type: string;
      title: string;
    };
  };
}

const NavBadge: React.FC<Props> = (props: Props) => {
  if (props.item.badge) {
    const badgeClass = ['label', 'pcoded-badge', props.item.badge.type];
    return (
      <span className={badgeClass.join(' ')}>{props.item.badge.title}</span>
    );
  }
  return null;
};

export default NavBadge;
