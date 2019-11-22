import React from 'react';
import SideBar from 'organisms/SideBar';
import { connect } from 'react-redux';
import { configBlock, ConfigureState } from 'reducers/configure';
import Header from 'organisms/Header';

interface Props extends Partial<ConfigureState> {
  doConfigBlock: () => void;
}

const MainPage: React.FC<Props> = () => (
  <>
    <SideBar
      type="sub"
      id="sideBar"
      chaildLi=""
      width={0}
      height={0}
      chaildLiA=""
    />
    <Header width={0} height={0} />
  </>
);

const mapStateToProps = ({
  configureReducer,
}: {
  configureReducer: ConfigureState;
}): Partial<ConfigureState> => ({
  layout: configureReducer.layout,
  configBlock: configureReducer.configBlock,
});

const mapDispatchToProps = {
  doConfigBlock: configBlock,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
