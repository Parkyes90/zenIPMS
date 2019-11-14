import React from 'react';
import { Badge } from 'routes/menu';

interface Props {
  item: {
    badge?: Badge;
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
