import React from 'react';

import MakePost from './MakePost/MakePost';
import TImeLine from './TimeLine/TimeLine';

const style = {
  width: '70%',
  margin: '20px'
};

const postBox = props => (
  <div style={style}>
    <MakePost makePost={props.makePost} />
    <TImeLine posts={props.posts} makeComment={props.makeComment} />
  </div>
);

export default postBox;
