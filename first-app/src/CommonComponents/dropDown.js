import React, { Component } from 'react';

class Dropdown extends Component {
   render() {
   		const { id, value, maxLength, type, disabled, handleChange, label, border } = this.props; 
      return (<div className={["inputField ", border&&"isBorder"].join(' ')}>
	          <label htmlFor="firstname">{label} : 
	        	<input 
	        		type={type}
	        		id={id}
	        		name={id}
	        		maxLength={maxLength}
	        		value={value}
	        		disabled={disabled}
	        		onChange={handleChange} />
	        </label>
	       </div>
      );
   }
}
export default Dropdown;