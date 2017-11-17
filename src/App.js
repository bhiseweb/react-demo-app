import React, { Component } from 'react';
import logo from './logo.svg';
import FooterMenu from './footer/FooterMenu';
import Menu from './Menu';
import './App.css';

URL = 'http://localhost:3008/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">TO-DO</h1>
        </header>
        <div className="App-container">
          <Menu />
        </div>
        <footer className="App-footer">
          <FooterMenu />
        </footer>
      </div>
    );
  }
}

export default App;
