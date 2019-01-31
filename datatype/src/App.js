import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';

import Array from './Array'

import Integer from './Integer'

import Strings from './Strings'

import Boolean from './Boolean'

class App extends Component {

 handleSubmit(e) {
  e.preventDefault();
   const title = !isNaN(this.getTitle.value) ? parseInt(this.getTitle.value): this.getTitle.value ;
   const data = {
    title
   }
   this.props.dispatch({
   type: 'ADD_POST',
   data
   })
   this.getTitle.value = '';
  }
  render() {
    return (
      <div className="App"> 
        <form className="form" onSubmit={this.handleSubmit.bind(this)} >
          <div className="input">
          <input required type="text" ref={(input) => this.getTitle = input}
              placeholder="Enter Something" /><br /><br />
          </div>
          <button className='button-1'>Post</button>
        </form>
        <Array/>
        
      </div>
    );
  }
}

export default connect()(App);
