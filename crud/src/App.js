import React, { Component } from 'react';

import './index.css';
import CommonTag from './CommonTag'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         newschool: [],
         oldschool: [{"id":1,"name":"Ashok"},{"id":2,"name":"Raj"}],
         newcollege: [],
         oldcollege: [{"id":1,"name":"virat"},{"id":2,"name":"kohli"}]
      }
  }
 
  render() {
  return (
  <div className="App">
    <CommonTag comVal={this.state.newschool}
    tagName = "New School"
    arrName = "newschool"/>
    <CommonTag comVal={this.state.newcollege}
    tagName = "New College"
    arrName = "newcollege"/>
    <CommonTag comVal={this.state.oldcollege}
    tagName = "Old College"
    arrName = "oldcollege"/>
    <CommonTag comVal={this.state.oldschool}
    tagName = "Old School"
    arrName = "oldschool"/>
  </div>
  );
  }
}
export default App;