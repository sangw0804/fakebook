import React from 'react';

const style = {};

const imgStyle = {
  height: '30px'
};

const leftHeader = props => (
  <div>
    <img
      src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Facebook-icon.png"
      style={imgStyle}
    />
    <input type="text" placeholder="검색" />
    <button>검색</button>
  </div>
);

export default leftHeader;
