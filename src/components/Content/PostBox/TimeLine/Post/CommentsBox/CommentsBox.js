import React from 'react';

import Comments from './Comments/Comments';
import MakeComment from './MakeComment/MakeComment';

const commentsBox = props => (
  <div>
    <Comments comments={props.comments} />
    <MakeComment postid={props.postid} makeComment={props.makeComment} />
  </div>
);

export default commentsBox;
