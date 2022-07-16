import './App.css';
import Main  from '../Main';
import React, { Component } from 'react';
import 'whatwg-fetch';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <header className="App-header"> 
          <Main/>
        </header>
      </div>
    );
  }
}

export default App;
