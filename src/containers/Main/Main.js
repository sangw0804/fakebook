import React, { Component } from 'react';

import Profile from '../../components/Profile/Profile';
import Content from '../../components/Content/Content';
import axios from 'axios';

const style = {
  margin: '30px',
  width: '80%'
};

class Main extends Component {
  state = {
    posts: null
  };

  componentDidMount = async () => {
    if (!this.state.posts) {
      const { data } = await axios.get('http://localhost:3001/posts');
      console.log(data);
      this.setState({
        posts: data
      });
    }
  };

  componentDidUpdate = async () => {
    if (!this.state.posts) {
      const { data } = await axios.get('http://localhost:3001/posts');
      console.log(data);
      this.setState({
        posts: data
      });
    }
  };

  makePostHandler = async content => {
    const { data } = await axios.post('http://localhost:3001/posts', {
      content
    });
    console.log(data);
    this.setState({
      posts: null
    });
  };

  makeCommentHandler = async (post_id, content) => {
    console.log(post_id, content);
    const { data } = await axios.post('http://localhost:3001/comments', {
      content,
      post_id
    });
    this.setState({
      posts: null
    });
  };

  render() {
    return (
      <div style={style}>
        <Profile myImg="https://picsum.photos/200" />
        <Content
          posts={this.state.posts}
          makePost={this.makePostHandler}
          makeComment={this.makeCommentHandler}
        />
      </div>
    );
  }
}

export default Main;
