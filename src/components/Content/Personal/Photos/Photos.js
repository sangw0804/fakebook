import React from 'react';

const style = {
  'background-color': 'white',
  padding: '10px'
};

const photos = props => (
  <div style={style}>
    <h2>사진</h2>
    <img src="https://picsum.photos/150" />
    <img src="https://picsum.photos/150" />
    <img src="https://picsum.photos/150" />
    <img src="https://picsum.photos/150" />
    <img src="https://picsum.photos/150" />
    <img src="https://picsum.photos/150" />
  </div>
);

export default photos;
