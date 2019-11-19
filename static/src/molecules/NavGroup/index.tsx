import React, { Component, ReactElement, Fragment } from 'react';
import NavCollapse from '../NavCollapse';
import NavItem from '../NavItem';
import { MenuModule } from 'routes/menu';

interface Props {
  layout: string;
  id: string;
  parentLi: string;
  parentLiA: string;
  parentLiCa: string;
  toggleCls: string;
  activeToggle: string[];
  collapesTitle: string;
  chaildLi: string;
  chaildLiA: string;
  subUi: string;
  isOpen: string[];
  isTrigger: string[];
  group: MenuModule;
}

class NavGroup extends Component<Props> {
  render(): ReactElement {
    const props = this.props;
    const {
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
    let navItems;
    if (props.group.children) {
      const groups = props.group.children;
      navItems = groups.map((item) => {
        switch (item.type) {
          case 'collapse':
            return (
              <NavCollapse
                key={item.id}
                collapse={item}
                type="main"
                toggleCls={toggleCls}
                activeToggle={activeToggle}
                collapesTitle={collapesTitle}
                chaildLi={chaildLi}
                chaildLiA={chaildLiA}
                subUi={subUi}
                {...this.props}
              />
            );
          case 'item':
            return (
              <NavItem
                layout={props.layout}
                key={item.id}
                item={item}
                width={0}
                height={0}
                LiClass={parentLi}
                LiClassA={parentLiA}
                {...this.props}
              />
            );
          default:
            return false;
        }
      });
    }
    return (
      <Fragment>
        <li
          key={props.group.id}
          className={parentLiCa ? parentLiCa : undefined}
        >
          <label>{props.group.title}</label>
        </li>
        {navItems}
      </Fragment>
    );
  }
}

export default NavGroup;
