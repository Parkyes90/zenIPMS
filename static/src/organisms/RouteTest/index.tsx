import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import withSizes, { Sizes } from 'react-sizes';

const RouteTest: React.FC = (props) => {
  console.log(props);
  return <div>test</div>;
};
const mapSizesToProps = (sizes: Partial<Sizes>): Partial<Sizes> => sizes;

export default withSizes(mapSizesToProps)(withRouter(RouteTest));
