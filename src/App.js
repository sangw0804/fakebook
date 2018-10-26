import React, { Component } from 'react';

import Header from './components/Header/Header';
import Main from './containers/Main/Main';

import './App.css';

const style = {
  'background-color': '#E9EBEE'
};

class App extends Component {
  render() {
    return (
      <div className="App d-flex flex-column align-items-center" style={style}>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
