import React, { Component } from 'react';

import { connect } from 'react-redux';

import { map } from 'lodash';

class BooleanVal extends Component{
	
	render(){
		const obj = this.props.intObj
		return(

			<div className='bol-val'>
			<div className="name">Boolean</div>
				{!!obj && map(obj, (el, i) => {
						if((el.title==='true')||(el.title==='false')){
							return <h1 key={i}>{el.title}</h1>
						}
					})}
			</div>
			);
	}
}



export default connect()(BooleanVal);