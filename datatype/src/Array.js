import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import String from './Strings'
import Integer from './Integer'
import Boolean from './Boolean'
import ObjectVal from './Object'
import ArrTypeData from './ArrType'

class ArrayValues extends Component{
	constructor(props) {
		super(props);
		this.state = {
		val: ''
		}
	}
	handleClick(e){
	    this.setState({
	      val: this.props.posts
	    })
	  }
  
	render(){
 		return(
 			<div>
				<div className="card-box">
					{!!this.props.posts && map(this.props.posts, (el, i) => {
						return <h1 key={i}>{el.title}</h1>
					})}
				</div>
				<button className="button-3" onClick={this.handleClick.bind(this)}>Seperate</button>
					<String obj={this.state.val}/>
					<Integer intObj={this.state.val}/>
					<Boolean intObj={this.state.val}/>	
					<ObjectVal intObj={this.state.val}/>	
					<ArrTypeData intObj={this.state.val}/>	
					
			</div>	
		);
	}
} 

const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps)(ArrayValues);