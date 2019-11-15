import React, { Component, ReactNode } from 'react';
import NavGroup from '../NavGroup';
import { Menu } from '../../routes/menu';

interface Props {
  layout: string;
  id: string;
  parentLi: string;
  parentLiA: string;
  parentLiCa: string;
  parentUi: string;
  toggleCls: string;
  activeToggle: string[];
  collapesTitle: string;
  chaildLi: string;
  chaildLiA: string;
  subUi: string;
  navCollapseToggle: (id: string, type: string) => void;
  navCollapseLeave: (id: string, type: string) => void;
  navContentLeave: () => void;
  isOpen: string[];
  isTrigger: string[];
  navigation: Menu;
}

class NavContent extends Component<Props> {
  render(): ReactNode {
    const {
      parentUi,
      parentLi,
      parentLiA,
      parentLiCa,
      toggleCls,
      activeToggle,
      collapesTitle,
      chaildLi,
      chaildLiA,
      subUi,
    } = this.props;

    const navItems = this.props.navigation.items.map((item) => {
      if (item.type === 'group') {
        return (
          <NavGroup
            layout={this.props.layout}
            key={item.id}
            group={item}
            parentLi={parentLi}
            parentLiA={parentLiA}
            parentLiCa={parentLiCa}
            toggleCls={toggleCls}
            activeToggle={activeToggle}
            collapesTitle={collapesTitle}
            chaildLi={chaildLi}
            chaildLiA={chaildLiA}
            subUi={subUi}
            {...this.props}
          />
        );
      } else {
        return null;
      }
    });

    let navs;
    if (this.props.layout === 'horizontal') {
      navs = navItems;
    } else {
      navs = <ul className={parentUi ? parentUi : undefined}>{navItems}</ul>;
    }
    return navs;
  }
}

export default NavContent;
