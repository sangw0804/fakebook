import React from 'react';

const comments = props => {
  let comments = null;
  if (props.comments) {
    comments = props.comments.map(comment => <div>{comment.content}</div>);
  }

  return <div>{comments}</div>;
};

export default comments;
