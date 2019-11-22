import React, { Component, ReactElement } from 'react';
import { configure } from 'configure';
import menu, { MenuChild, MenuParent } from 'routes/menu';
import { Link } from 'react-router-dom';

interface State {
  main: MenuParent | MenuChild;
  item: MenuChild | MenuParent;
}

class Breadcrumb extends Component<{}, State> {
  state: State = {
    main: {
      id: '',
      title: '',
      type: '',
      children: [],
    },
    item: {
      id: '',
      title: '',
      type: '',
    },
  };

  componentDidMount(): void {
    menu.items.forEach((item) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item);
      }
    });
  }

  UNSAFE_componentWillReceiveProps(): void {
    menu.items.forEach((item) => {
      if (item.type && item.type === 'group') {
        this.getCollapse(item);
      }
    });
  }

  getCollapse = (item: MenuParent | MenuChild): void => {
    if (item.children) {
      item.children.forEach((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          this.getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (
            document.location.pathname ===
            configure.basename + collapse.url
          ) {
            this.setState({ item: collapse, main: item });
          }
        }
      });
    }
  };

  render(): ReactElement {
    let title = 'Welcome';
    let main;
    let item;
    let breadcrumb: ReactElement = <div />;
    if (this.state.main.type === 'collapse') {
      main = (
        <li className="breadcrumb-item">
          <Link to="#">{this.state.main.title}</Link>
        </li>
      );
    }

    if (this.state.item.type === 'item') {
      title = this.state.item.title;
      item = (
        <li className="breadcrumb-item">
          <Link to="#">{title}</Link>
        </li>
      );
    }

    if (this.state.item.breadcrumbs !== false) {
      breadcrumb = (
        <div className="col-md-12">
          <div className="page-header-title">
            <h5>{title}</h5>
          </div>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={configure.defaultPath}>
                <i className="feather icon-home" />
              </Link>
            </li>
            {main}
            {item}
          </ul>
        </div>
      );
    }

    document.title = title + ' | Zen IPMS';

    return breadcrumb;
  }
}

export default Breadcrumb;
