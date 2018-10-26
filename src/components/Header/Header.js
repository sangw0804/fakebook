import React from 'react';

import LeftHeader from './LeftHeader/LeftHeader';
import RightHeader from './RightHeader/RightHeader';

const style = {
  backgroundColor: '#4267B2',
  zIndex: '2',
  padding: '8px'
};

const header = props => {
  return (
    <div
      className="d-flex flex-row justify-content-around align-self-stretch"
      style={style}
    >
      <LeftHeader />
      <RightHeader />
    </div>
  );
};

export default header;
