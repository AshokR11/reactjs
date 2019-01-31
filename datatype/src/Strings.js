import React, { Component } from 'react';

import { connect } from 'react-redux';

import { map } from 'lodash';

class Strings extends Component{
	
	render(){
		const obj = this.props.obj
		return(

			<div className='str-val'>
			<div className="name">String</div>
				{!!obj && map(obj, (el, i) => {
						if((typeof(el.title)==='string')&&(el.title !== 'true')&&(el.title !== 'false')&&
							(!el.title.includes("{"))&&(!el.title.includes("["))&&(!el.title.includes("]"))){
							return <h1 key={i}>{el.title}</h1>
						}
					})}
			</div>
			);
	}
}



export default connect()(Strings);