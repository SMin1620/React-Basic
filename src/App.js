import React, { Component } from 'react';
import "./App.css";
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";





class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="REACT" sub="FOR UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTMl is Good."></Content>
      </div>
    );
  }
}

export default App;
