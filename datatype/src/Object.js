import React, { Component } from 'react';

import { connect } from 'react-redux';

import { map } from 'lodash';

class ObjectVal extends Component{
	
	render(){
		const obj = this.props.intObj
		return(

			<div className='obj-val'>
			<div className="name">Object</div>
				{!!obj && map(obj, (el, i) => {
						console.log(typeof(el.title))
						if((typeof(el.title)==='string')&&(el.title.includes("{"))&&(el.title.includes("}"))&&
							(typeof(JSON.parse(el.title))==='object')){
							return <h1 key={i}>{el.title}</h1>
						}
					})}
			</div>
			);
	}
}



export default connect()(ObjectVal);