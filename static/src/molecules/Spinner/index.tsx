import React, { FC } from 'react';

const Spinner: FC = () => (
  <div className="loader-bg">
    <div className="loader-track">
      <div className="loader-fill" />
    </div>
  </div>
);

export default Spinner;
