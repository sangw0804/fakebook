import React from 'react';

const style = {
  padding: '20px',
  'background-image': 'url(https://picsum.photos/1000/500)'
};

const imgStyle = {
  height: '120px',
  'border-radius': '100%'
};

const Profile = props => (
  <div
    className="d-flex flex-row justify-content-start align-items-end"
    style={style}
  >
    <img src={props.myImg} style={imgStyle} />
    <h2>오상우</h2>
  </div>
);

export default Profile;
