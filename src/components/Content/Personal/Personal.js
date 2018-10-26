import React from 'react';

import Introduction from './Introduction/Introduction';
import Photos from './Photos/Photos';

const style = {
  width: '25%',
  margin: '20px'
};

const personal = props => (
  <div style={style}>
    <Introduction />
    <Photos />
  </div>
);

export default personal;
