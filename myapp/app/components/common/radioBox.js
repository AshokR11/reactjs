import React, { Component } from 'react';

class RadioBox extends Component {
   render() {
   		const { id, value, maxLength, type, disabled, handleClick, label, option1, option2 } = this.props; 
      return (<div className={"inputField "}>
	          <label htmlFor="radio">{label} : 
	        	{option1}<input 
	        		type="radio"
	        		id={option1}
	        		name={id}
	        		value={value}
	        		disabled={disabled}
	        		onChange={handleClick} />
        		{option2}<input 
	        		type="radio"
	        		id={option2}
	        		name={id}
	        		value={value}
	        		disabled={disabled}
	        		onClick={handleClick} />
	        </label>
	       </div>
      );
   }
}
export default RadioBox;