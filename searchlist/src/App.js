import React, { Component } from 'react';
import './App.css';
import { map } from 'lodash';
import SearchList from './CommonSearchList' 

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
         country: ["Ind","Pak","SL","NZ","Aus"],
         state : ["TN","AP","KL","KAR"],
         sports : ["cricket","volleyball","football","chess"],
         randomnum :[324,64864,684684,89,361,8498,6846984,315,655]
      }
  }

  render() {
    return (
      <div className="App">
        <SearchList commSearch={this.state.country}
          tagName="Search your country here"
          id = "cont"/>
        <SearchList commSearch={this.state.state}
          tagName="Search your state here"
          id = "stat"/>
        <SearchList commSearch={this.state.sports}
          tagName="Search your favourite sports"
          id = "spo"/>
        <SearchList commSearch={this.state.randomnum}
          tagName="Search Numbers"
          id = "rannum"/>
      </div>
    );
  }
}

export default App;
