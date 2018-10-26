import React, { Component } from 'react';

const style = {
  'background-color': 'white',
  padding: '10px'
};

class MakePost extends Component {
  state = {
    value: ''
  };

  changeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div className="d-flex flex-column" style={style}>
        <h3>게시물 올리기</h3>
        <textarea
          placeholder="글 내용을 써주세요."
          onChange={this.changeHandler}
          value={this.state.value}
        />
        <button
          onClick={() => {
            this.props.makePost(this.state.value);
            this.setState({ value: '' });
          }}
        >
          작성
        </button>
      </div>
    );
  }
}

export default MakePost;
