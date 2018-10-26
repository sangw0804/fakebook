import React from 'react';

import PostBox from './PostBox/PostBox';
import Personal from './Personal/Personal';

const content = props => {
  return (
    <div className="d-flex flex-row">
      <Personal />
      <PostBox
        posts={props.posts}
        makePost={props.makePost}
        makeComment={props.makeComment}
      />
    </div>
  );
};

export default content;
