import React from 'react';
import SideBar from 'organisms/SideBar';
import { connect } from 'react-redux';
import { configBlock, ConfigureState } from 'reducers/configure';
import Header from 'organisms/Header';
import Footer from '../../organisms/Footer';
import ContentWrapper from '../../organisms/ContentWrapper';
import ThemeSetting from '../../organisms/ThemeSetting';

interface Props extends ConfigureState {
  doConfigBlock: () => void;
}

const MainPage: React.FC<Props> = (props: Props) => (
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
    <ContentWrapper
      prebuildLayout={props.prebuildLayout}
      layout={props.layout}
    />
    {props.configBlock && <ThemeSetting />}
    <Footer />
  </>
);

const mapStateToProps = ({
  configureReducer,
}: {
  configureReducer: ConfigureState;
}): ConfigureState => ({
  ...configureReducer,
});

const mapDispatchToProps = {
  doConfigBlock: configBlock,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
