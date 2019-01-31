import React, { Component } from 'react';
import { map } from 'lodash';

class Integer extends Component{
	render(){
		const intObj = this.props.intObj
		return(
			<div className='int-val'>
				<div className="name">Numbers</div>
				{!!intObj && map(intObj, (el, i) => {
					console.log(el.title)
					if(typeof(el.title)==='number'){
						return <h1 key={i}>{el.title}</h1>
					}
					})}
			</div>
			);
	}
}
export default Integer;