import React, { Component, Fragment, ReactElement } from 'react';
import NavIcon from 'atoms/NavIcon';
import NavBadge from 'atoms/NavBadge';
import NavItemCollapsed from 'molecules/NavItemCollapsed';
import LoopNavCollapse from 'molecules/NavCollapse';
import { MenuChild, MenuParent } from 'routes/menu';
import { Link } from 'react-router-dom';

interface Props {
  type: string;
  layout: string;
  id: string;
  collapse: MenuParent | MenuChild;
  navCollapseToggle: (id: string, type: string) => void;
  navCollapseLeave: (id: string, type: string) => void;
  navContentLeave: () => void;
  isOpen: string[];
  isTrigger: string[];
  toggleCls: string;
  activeToggle: string[];
  collapesTitle: string;
  chaildLi: string;
  chaildLiA: string;
  subUi: string;
}

class NavCollapse extends Component<Props> {
  componentDidMount(): void {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => {
        return id === this.props.collapse.id;
      });
    if (currentIndex > -1) {
      this.props.navCollapseToggle(this.props.collapse.id, this.props.type);
    }

    if (this.props.layout === 'horizontal') {
      this.props.navContentLeave();
    }
  }
  render(): ReactElement {
    const { isOpen, isTrigger } = this.props;

    let navItems;
    if (this.props.collapse.children) {
      const collapses = this.props.collapse.children;
      navItems = collapses.map((item: MenuChild) => {
        switch (item.type) {
          case 'collapse':
            return (
              <LoopNavCollapse
                key={item.id}
                collapse={item}
                type="sub"
                layout={this.props.layout}
                id={item.id}
                isOpen={isOpen}
                navCollapseLeave={this.props.navCollapseLeave}
                navCollapseToggle={this.props.navCollapseToggle}
                navContentLeave={this.props.navContentLeave}
                isTrigger={isTrigger}
                toggleCls={this.props.toggleCls}
                activeToggle={this.props.activeToggle}
                collapesTitle={this.props.collapesTitle}
                chaildLi={this.props.chaildLi}
                chaildLiA={this.props.chaildLiA}
                subUi={this.props.subUi}
              />
            );
          case 'item':
            return (
              <NavItemCollapsed
                {...this.props}
                LiClass={this.props.chaildLi}
                LiClassA={this.props.chaildLiA}
                layout={this.props.layout}
                key={item.id}
                item={item}
              />
            );
          default:
            return false;
        }
      });
    }

    let itemTitle: string | ReactElement = this.props.collapse.title;
    if (this.props.collapse.icon) {
      itemTitle = (
        <span className="pcoded-mtext">
          {this.props.collapse.title}
          <NavBadge item={this.props.collapse} />
        </span>
      );
    }

    let navLinkClass = [];
    navLinkClass.push(
      this.props.collapesTitle ? this.props.collapesTitle : null,
    );

    let navItemClass = [];
    navItemClass.push(this.props.toggleCls ? this.props.toggleCls : null);

    const openIndex = isOpen.findIndex((id) => {
      return id === this.props.collapse.id;
    });
    if (openIndex > -1) {
      navItemClass = [...navItemClass, 'active'];
      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }
    const triggerIndex = isTrigger.findIndex((id) => {
      return id === this.props.collapse.id;
    });
    if (triggerIndex > -1) {
      navItemClass = [
        ...navItemClass,
        this.props.activeToggle ? this.props.activeToggle : '',
      ];
    }
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => {
        return id === this.props.collapse.id;
      });
    if (currentIndex > -1) {
      navItemClass = [...navItemClass, 'active'];
      if (this.props.layout !== 'horizontal') {
        navLinkClass = [...navLinkClass, 'active'];
      }
    }

    const subContent = (
      <Fragment>
        <Link to="#" className={navLinkClass.join(' ')}>
          <NavIcon item={this.props.collapse} />
          {itemTitle}
        </Link>
        <ul className={this.props.subUi ? this.props.subUi : undefined}>
          {navItems}
        </ul>
      </Fragment>
    );
    let mainContent;
    if (this.props.layout === 'horizontal') {
      mainContent = <li className={navItemClass.join(' ')}>{subContent}</li>;
    } else {
      mainContent = <li className={navItemClass.join(' ')}>{subContent}</li>;
    }
    return mainContent;
  }
}

export default NavCollapse;
