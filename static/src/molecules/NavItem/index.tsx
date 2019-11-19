import React, { Component, ReactElement } from 'react';
import NavIcon from 'atoms/NavIcon';
import NavBadge from 'atoms/NavBadge';
import NavMainContent from 'molecules/NavMainContent';
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuChild } from '../../routes/menu';
import { leaveContent, updateText } from '../../reducers/navigation';
import { onItemClick } from '../../reducers/configure';
import withSizes, { Sizes } from 'react-sizes';
import { connect } from 'react-redux';

interface Props extends Sizes {
  LiClassA: string;
  LiClass: string;
  layout: string;
  item: MenuChild;
  onItemClick: () => void;
  updateText: (title: string | ReactElement) => void;
  leaveContent: () => void;
}

class NavItem extends Component<Props & RouteComponentProps> {
  render(): ReactElement {
    let itemTitle: string | ReactElement = this.props.item.title;
    if (this.props.item.icon) {
      itemTitle = (
        <span className="pcoded-mtext">
          {this.props.item.title}
          <NavBadge item={this.props.item} />
        </span>
      );
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
        </a>
      );
    } else {
      subContent = (
        <NavLink
          to={`${this.props.item.url}`}
          className={this.props.LiClassA ? this.props.LiClassA : undefined}
          exact={true}
          target={itemTarget}
          onClick={(): void => this.props.updateText(itemTitle)}
        >
          <NavIcon item={this.props.item} />
          {itemTitle}
        </NavLink>
      );
    }

    return (
      <NavMainContent
        LiClass={this.props.LiClass}
        layout={this.props.layout}
        windowWidth={this.props.width}
        subContent={subContent}
        leaveContent={this.props.leaveContent}
        onItemClick={this.props.onItemClick}
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
)(withSizes<Partial<Sizes>, Props>(mapSizesToProps)(withRouter(NavItem)));
