import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './component/hello'
import Progress from './component/progress'
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Progress></Progress>
      </div>
    );
  }
}

export default App;
