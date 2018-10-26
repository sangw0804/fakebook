import React from 'react';

const style = {
  color: 'white'
};

const rightHeader = props => (
  <div className="d-flex flex-row justify-content-around" style={style}>
    <div>안운장</div>
    <div>알람</div>
    <div>메세지</div>
    <div>?</div>
  </div>
);

export default rightHeader;
