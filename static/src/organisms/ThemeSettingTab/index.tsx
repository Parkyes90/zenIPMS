import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { DisPatchProps } from '../ThemeSetting/container';
import { ConfigureState } from '../../reducers/configure';

interface Props {
  activeTab: string;
}

const ThemeSettingTab: React.FC<Props & ConfigureState & DisPatchProps> = (
  props: Props & ConfigureState & DisPatchProps,
) => {
  return (
    <TabContent activeTab={props.activeTab}>
      <TabPane tabId="1">
        <h6>header background</h6>
        <div className="theme-color header-color">
          <Link
            onClick={(): void => props.doHeaderBg('light')}
            className={classNames({
              active: props.headerBg === 'light',
            })}
            to="#"
            data-value="header-default"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.doHeaderBg('blue')}
            className={classNames({
              active: props.headerBg === 'blue',
            })}
            to="#"
            data-value="header-blue"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.doHeaderBg('red')}
            className={classNames({
              active: props.headerBg === 'red',
            })}
            to="#"
            data-value="header-red"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.doHeaderBg('purple')}
            className={classNames({
              active: props.headerBg === 'purple',
            })}
            to="#"
            data-value="header-purple"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.doHeaderBg('info')}
            className={classNames({
              active: props.headerBg === 'info',
            })}
            to="#"
            data-value="header-info"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.doHeaderBg('dark')}
            className={classNames({
              active: props.headerBg === 'dark',
            })}
            to="#"
            data-value="header-dark"
          >
            <span />
            <span />
          </Link>
        </div>
        <h6>Menu Brand Color</h6>
        <div className="theme-color brand-color">
          <Link
            onClick={(): void => props.bgBrand('light')}
            className={classNames({
              active: props.brandBg === 'light',
            })}
            to="#"
            data-value="brand-default"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgBrand('blue')}
            className={classNames({
              active: props.brandBg === 'blue',
            })}
            to="#"
            data-value="brand-blue"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgBrand('red')}
            className={classNames({
              active: props.brandBg === 'red',
            })}
            to="#"
            data-value="brand-red"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgBrand('purple')}
            className={classNames({
              active: props.brandBg === 'purple',
            })}
            to="#"
            data-value="brand-purple"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgBrand('info')}
            className={classNames({
              active: props.brandBg === 'info',
            })}
            to="#"
            data-value="brand-info"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgBrand('dark')}
            className={classNames({
              active: props.brandBg === 'dark',
            })}
            to="#"
            data-value="brand-dark"
          >
            <span />
            <span />
          </Link>
        </div>
        <h6>Menu background</h6>
        <div className="theme-color navbar-color">
          <Link
            onClick={(): void => props.bgMenu('default')}
            className={classNames({
              active: props.menuBg === 'default',
            })}
            to="#"
            data-value="navbar-default"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgMenu('blue')}
            className={classNames({
              active: props.menuBg === 'blue',
            })}
            to="#"
            data-value="navbar-blue"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgMenu('red')}
            className={classNames({
              active: props.menuBg === 'red',
            })}
            to="#"
            data-value="navbar-red"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgMenu('purple')}
            className={classNames({
              active: props.menuBg === 'purple',
            })}
            to="#"
            data-value="navbar-purple"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgMenu('info')}
            className={classNames({
              active: props.menuBg === 'info',
            })}
            to="#"
            data-value="navbar-info"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgMenu('dark')}
            className={classNames({
              active: props.menuBg === 'dark',
            })}
            to="#"
            data-value="navbar-dark"
          >
            <span />
            <span />
          </Link>
        </div>
        <h6>Menu background [ Gradient ]</h6>
        <div className="theme-color navbar-gradient-color">
          <Link
            onClick={(): void => props.bgGradient('default')}
            className={classNames({
              active: props.menuBgGradient === 'default',
            })}
            to="#"
            data-value="navbar-default"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgGradient('blue')}
            className={classNames({
              active: props.menuBgGradient === 'blue',
            })}
            to="#"
            data-value="navbar-gradient-blue"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgGradient('red')}
            className={classNames({
              active: props.menuBgGradient === 'red',
            })}
            to="#"
            data-value="navbar-gradient-red"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgGradient('purple')}
            className={classNames({
              active: props.menuBgGradient === 'purple',
            })}
            to="#"
            data-value="navbar-gradient-purple"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgGradient('info')}
            className={classNames({
              active: props.menuBgGradient === 'info',
            })}
            to="#"
            data-value="navbar-gradient-info"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgGradient('dark')}
            className={classNames({
              active: props.menuBgGradient === 'dark',
            })}
            to="#"
            data-value="navbar-gradient-dark"
          >
            <span />
            <span />
          </Link>
        </div>
        <h6>Menu background [ Pattern ]</h6>
        <div className="theme-color navbar-pattern">
          <Link
            onClick={(): void => props.bgPattern('pt1')}
            className={classNames({
              active: props.menuBgPattern === 'pt1',
            })}
            to="#"
            data-value="navbar-pattern-1"
          />
          <Link
            onClick={(): void => props.bgPattern('pt2')}
            className={classNames({
              active: props.menuBgPattern === 'pt2',
            })}
            to="#"
            data-value="navbar-pattern-2"
          />
          <Link
            onClick={(): void => props.bgPattern('pt3')}
            className={classNames({
              active: props.menuBgPattern === 'pt3',
            })}
            to="#"
            data-value="navbar-pattern-3"
          />
          <Link
            onClick={(): void => props.bgPattern('pt4')}
            className={classNames({
              active: props.menuBgPattern === 'pt4',
            })}
            to="#"
            data-value="navbar-pattern-4"
          />
          <Link
            onClick={(): void => props.bgPattern('pt5')}
            className={classNames({
              active: props.menuBgPattern === 'pt5',
            })}
            to="#"
            data-value="navbar-pattern-5"
          />
          <Link
            onClick={(): void => props.bgPattern('pt6')}
            className={classNames({
              active: props.menuBgPattern === 'pt6',
            })}
            to="#"
            data-value="navbar-pattern-6"
          />
        </div>
        <h6>Navbar Image</h6>
        <div className="theme-color navbar-images">
          <Link
            onClick={(): void => props.bgImage('img1')}
            className={classNames({
              active: props.menuBgImage === 'img1',
            })}
            to="#"
            data-value="navbar-image-1"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgImage('img2')}
            className={classNames({
              active: props.menuBgImage === 'img2',
            })}
            to="#"
            data-value="navbar-image-2"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgImage('img3')}
            className={classNames({
              active: props.menuBgImage === 'img3',
            })}
            to="#"
            data-value="navbar-image-3"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgImage('img4')}
            className={classNames({
              active: props.menuBgImage === 'img4',
            })}
            to="#"
            data-value="navbar-image-4"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.bgImage('img5')}
            className={classNames({
              active: props.menuBgImage === 'img5',
            })}
            to="#"
            data-value="navbar-image-5"
          >
            <span />
            <span />
          </Link>
        </div>
      </TabPane>
    </TabContent>
  );
};

export default ThemeSettingTab;
