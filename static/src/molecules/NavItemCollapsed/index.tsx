import React, { Component, ReactElement } from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import withSizes, { Sizes } from 'react-sizes';
import NavIcon from 'atoms/NavIcon';
import NavBadge from 'atoms/NavBadge';
import NavMainContent from '../NavMainContent';
import { MenuChild } from 'routes/menu';
import { onItemClick } from '../../reducers/configure';
import { updateText, leaveContent } from '../../reducers/navigation';
import { connect } from 'react-redux';

interface Props extends Sizes {
  LiClassA: string;
  LiClass: string;
  layout: string;
  onItemClick: () => void;
  updateText: (title: string | ReactElement) => void;
  leaveContent: () => void;
  item: MenuChild;
}

class NavItemCollapsed extends Component<Props & RouteComponentProps> {
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
          to={`${this.props.item.url}`}
          className={this.props.LiClassA ? this.props.LiClassA : undefined}
          exact={true}
          onClick={(): void => this.props.updateText(itemTitle)}
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
        onItemClick={this.props.onItemClick}
        leaveContent={this.props.leaveContent}
        windowWidth={this.props.width}
        subContent={subContent}
      />
    );
  }
}

const mapDispatchToProps = {
  leaveContent,
  onItemClick,
  updateText,
};

const mapSizesToProps = (sizes: Partial<Sizes>): Partial<Sizes> => sizes;

export default connect(
  null,
  mapDispatchToProps,
)(
  withSizes<Partial<Sizes>, Props>(mapSizesToProps)(
    withRouter(NavItemCollapsed),
  ),
);
