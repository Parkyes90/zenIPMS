import React, { useState } from 'react';
import { ConfigureState } from 'reducers/configure';
import PerfectScrollbar from 'react-perfect-scrollbar';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { DisPatchProps } from './container';
import { Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import ThemeSettingTab from '../ThemeSettingTab';

const ThemeSetting: React.FC<ConfigureState & DisPatchProps> = (
  props: ConfigureState & DisPatchProps,
) => {
  const [isSetting, setIsSetting] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [prebuild, setPrebuild] = useState(false);
  const [styler, setStyler] = useState(true);

  const toggleTab = (tab: string): void => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const togglePrebuild = (): void => {
    setIsSetting(true);
    setPrebuild(!prebuild);
    setStyler(!styler);
  };

  const toggleStyler = (): void => {
    setIsSetting(true);
    setPrebuild(false);
    setStyler(true);
  };

  const toggleSetting = (): void => {
    setIsSetting(!isSetting);
    setPrebuild(false);
    setStyler(true);
  };

  return (
    <div
      className={classNames('menu-styler', {
        open: isSetting && styler,
        'open prebuild-open': isSetting && prebuild,
      })}
    >
      <div className="style-toggler">
        <Link to="#" onClick={toggleSetting} />
      </div>
      <div className="prebuild-toggler">
        <div className="prebuild-group">
          <Link
            to="#"
            className={classNames('prebuild-link-styler', {
              active: styler,
            })}
            onClick={toggleStyler}
          >
            STYLER
          </Link>
          <Link
            to="#"
            className={classNames('prebuild-link-layout', {
              active: prebuild,
            })}
            onClick={togglePrebuild}
          >
            PREBUILD LAYOUTS
          </Link>
        </div>
      </div>
      <div className="style-block">
        <h6 className="mb-2">Zen IPMS Live Menu Customizer</h6>
        <hr className="my-0" />
        <h6>Layouts</h6>
        <div className="theme-color layout-type">
          <Link
            to="#"
            onClick={(): void => props.layOutType('default')}
            className={classNames({
              active: props.layoutType === 'default',
            })}
            data-value="menu-dark"
            title="Default Layout"
          >
            <span />
            <span />
          </Link>
          <Link
            to="#"
            onClick={(): void => props.layOutType('light')}
            className={classNames({
              active: props.layoutType === 'light',
            })}
            data-value="menu-light"
            title="Light"
          >
            <span />
            <span />
          </Link>
          <Link
            to="#"
            onClick={(): void => props.layOutType('dark')}
            className={classNames({
              active: props.layoutType === 'dark',
            })}
            data-value="dark"
            title="Dark"
          >
            <span />
            <span />
          </Link>
          <Link
            onClick={(): void => props.resetTemplate()}
            to="#"
            data-value="reset"
            title="Reset"
          >
            Reset to Default
          </Link>
        </div>
        <p className="f-12 mb-1">
          <span className="text-c-red">*</span>
          in Prebuild Layout you redirect to new page
        </p>
        <Button
          onClick={togglePrebuild}
          color="success"
          className="btn-square btn-block prebuild-link"
        >
          Try our Prebuild Layouts
        </Button>
        <div className="form-group mb-3">
          <div className="switch switch-primary d-inline m-r-10">
            <input
              type="checkbox"
              id="icon-colored"
              onClick={(): void => props.colorIcon()}
              defaultChecked={props.iconColor}
            />
            <label htmlFor="icon-colored" className="cr" />
            <label className="p-l-10">Icon Color</label>
          </div>
        </div>
        <Nav pills className="mb-2">
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classNames('nav-link', {
                active: activeTab === '1',
              })}
              onClick={(): void => {
                toggleTab('1');
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classNames('nav-link', {
                active: activeTab === '2',
              })}
              onClick={(): void => {
                toggleTab('2');
              }}
            >
              Layout
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ cursor: 'pointer' }}
              className={classNames('nav-link', {
                active: activeTab === '3',
              })}
              onClick={(): void => {
                toggleTab('3');
              }}
            >
              Extra
            </NavLink>
          </NavItem>
        </Nav>
        <PerfectScrollbar
          style={{ height: 'calc(100vh - 340px)', position: 'relative' }}
        >
          <TabContent activeTab={activeTab}>
            <ThemeSettingTab activeTab={activeTab} {...props} />
          </TabContent>
        </PerfectScrollbar>
      </div>
    </div>
  );
};

export default ThemeSetting;
