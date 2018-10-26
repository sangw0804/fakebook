import React from 'react';

import CommentsBox from './CommentsBox/CommentsBox';

const style = {
  margin: '10px',
  padding: '10px',
  backgroundColor: 'white'
};

const contentStyle = {
  'font-size': '1.5rem',
  margin: '5px'
};

const post = props => (
  <div style={style}>
    <div style={{ color: 'gray' }}>오상우님이 글을 썼습니다.</div>
    <div style={contentStyle}>{props.post.content}</div>
    <CommentsBox
      comments={props.post.comments}
      postid={props.post.id}
      makeComment={props.makeComment}
    />
  </div>
);

export default post;
