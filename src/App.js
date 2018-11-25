import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import mds from "./README.md"
// console.log(mds)

class App extends Component {
  render() {
    return (
      <div className="App">
        222sssss
        <div dangerouslySetInnerHTML={{ __html: mds }} />

        <img src={require("./aaa.png")} alt=""/>
      </div>
    );
  }
}

export default App;
