import React, { Component } from 'react';

import { connect } from 'react-redux';

import { map } from 'lodash';

class ArrTypeData extends Component{
	
	render(){
		const obj = this.props.intObj
		return(

			<div className='arrtype-val'>
			<div className="name seperate-name">Array</div>
				{!!obj && map(obj, (el, i) => {
						if((typeof(el.title)==='string')&&(el.title.includes("["))){
							return <h1 key={i}>{el.title}</h1>
						}
					})}
			</div>
			);
	}
}



export default connect()(ArrTypeData);