import React from 'react';
import { configure } from '../../configure';
import Breadcrumb from '../Breadcrumb';
import classNames from 'classnames';
import MainRoute from '../../molecules/MainRoute';

interface Props {
  prebuildLayout: string;
  layout: string;
}

const ContentWrapper: React.FC<Props> = (props: Props) => {
  return (
    <div className="pcoded-main-container">
      <div
        className={classNames('pcoded-wrapper', {
          container: props.prebuildLayout === 'layout-8',
        })}
      >
        <div className="pcoded-content">
          <div className="pcoded-inner-content">
            <div className="main-body">
              <div className="page-wrapper">
                {props.layout === 'horizontal' ? (
                  <div className="page-header">
                    <div className="page-block">
                      <div className="row align-items-center">
                        <Breadcrumb />
                      </div>
                    </div>
                  </div>
                ) : null}
                <MainRoute defaultPath={configure.defaultPath} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
