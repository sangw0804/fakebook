import React, { Component } from 'react';
import axios from 'axios';

class MakeComment extends Component {
  state = {
    value: ''
  };

  contentChangeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="댓글을 써주세요"
          onChange={this.contentChangeHandler}
        />
        <button
          onClick={() =>
            this.props.makeComment(this.props.postid, this.state.value)
          }
        >
          작성
        </button>
      </div>
    );
  }
}

export default MakeComment;
