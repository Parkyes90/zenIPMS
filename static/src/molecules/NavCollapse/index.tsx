import React, { Component, Fragment, ReactElement } from 'react';
import NavIcon from 'atoms/NavIcon';
import NavBadge from 'atoms/NavBadge';
import NavItemCollapsed from 'molecules/NavItemCollapsed';
import LoopNavCollapse from 'molecules/NavCollapse';
import { MenuChild, MenuParent } from 'routes/menu';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Collapse,
  leaveCollapse,
  leaveContent,
  NavigationState,
  toggleCollapse,
} from 'reducers/navigation';

interface Props {
  type: string;
  layout: string;
  id: string;
  collapse: MenuParent | MenuChild;
  toggleCollapse: (payload: Collapse) => void;
  leaveCollapse: (payload: Collapse) => void;
  leaveContent: () => void;
  toggleCls: string;
  activeToggle: string[];
  collapesTitle: string;
  chaildLi: string;
  chaildLiA: string;
  subUi: string;
}

class NavCollapse extends Component<Props & NavigationState> {
  componentDidMount(): void {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => {
        return id === this.props.collapse.id;
      });
    if (currentIndex > -1) {
      this.props.toggleCollapse({
        id: this.props.collapse.id,
        menu: this.props.type,
      });
    }

    if (this.props.layout === 'horizontal') {
      this.props.leaveContent();
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
                width={0}
                height={0}
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
        <Link
          to="#"
          className={navLinkClass.join(' ')}
          onClick={(): void =>
            this.props.toggleCollapse({
              id: this.props.collapse.id,
              menu: this.props.type,
            })
          }
        >
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
      mainContent = (
        <li
          onMouseLeave={(): void =>
            this.props.leaveCollapse({
              id: this.props.collapse.id,
              menu: this.props.type,
            })
          }
          onMouseEnter={(): void =>
            this.props.toggleCollapse({
              id: this.props.collapse.id,
              menu: this.props.type,
            })
          }
          className={navItemClass.join(' ')}
        >
          {subContent}
        </li>
      );
    } else {
      mainContent = <li className={navItemClass.join(' ')}>{subContent}</li>;
    }
    return mainContent;
  }
}

const mapStateToProps = ({
  navigationReducer,
}: {
  navigationReducer: NavigationState;
}): NavigationState => {
  return { ...navigationReducer };
};

const mapDisPatchToProps = {
  leaveContent,
  leaveCollapse,
  toggleCollapse,
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(NavCollapse);
