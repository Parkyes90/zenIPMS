import React, { Component, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import windowSize, { WindowSizeProps } from 'react-window-size';
import NavIcon from 'atoms/NavIcon';
import NavBadge from 'atoms/NavBadge';
import NavMainContent from '../NavMainContent';
import { MenuChild } from 'routes/menu';

interface Props {
  LiClassA: string;
  LiClass: string;
  layout: string;
  item: MenuChild;
}

class NavItemCollapsed extends Component<Props & WindowSizeProps> {
  render(): ReactElement {
    let itemTitle: string | ReactElement = this.props.item.title;
    if (this.props.item.icon) {
      itemTitle = <span className="pcoded-mtext">{this.props.item.title}</span>;
    }

    let itemTarget = '';
    if (this.props.item.target) {
      itemTarget = '_blank';
    }

    let subContent;
    if (this.props.item.external) {
      subContent = (
        <a href={this.props.item.url} target="_blank" rel="noopener noreferrer">
          <NavIcon item={this.props.item} />
          {itemTitle}
          <NavBadge item={this.props.item} />
        </a>
      );
    } else {
      subContent = (
        <NavLink
          to={'#'}
          className={this.props.LiClassA ? this.props.LiClassA : undefined}
          exact={true}
          target={itemTarget}
        >
          <NavIcon item={this.props.item} />
          {itemTitle}
          <NavBadge item={this.props.item} />
        </NavLink>
      );
    }
    return (
      <NavMainContent
        LiClass={this.props.LiClass}
        layout={this.props.layout}
        windowWidth={this.props.windowWidth}
        subContent={subContent}
      />
    );
  }
}

export default windowSize(NavItemCollapsed);
