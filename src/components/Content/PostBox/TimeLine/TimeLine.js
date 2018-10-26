import React from 'react';

import Post from './Post/Post';

const style = {
  padding: '10px',
  margin: '10px'
};

const timeLine = props => {
  let posts = <div>글이 없다.</div>;
  if (props.posts) {
    posts = props.posts.map(post => (
      <Post post={post} makeComment={props.makeComment} />
    ));
  }

  return <div style={style}>{posts}</div>;
};

export default timeLine;
