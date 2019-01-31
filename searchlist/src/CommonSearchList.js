import React, { Component } from 'react';
import { map } from 'lodash';

class SearchList extends Component {

	searchVal(e){
		var i;
		const comId = this.props.id
		const value = e.target.value
		const capVal = value.toUpperCase()
		const ul = document.getElementById(comId)
		const li = ul.getElementsByTagName('li')
		for(i=0;i<li.length;i++){
			const listValue = li[i].getElementsByTagName('a')[0];
			if(listValue.innerHTML.toUpperCase().indexOf(capVal) > -1){
				li[i].style.display = '';
			}
			else{
				li[i].style.display = 'none';
			}
		}
	}

	render() {
		const commonList = this.props.commSearch
	return (
	<div className="comm">
		<h2>{this.props.tagName}</h2>
		<input className="class" type="text" onKeyUp={this.searchVal.bind(this)} placeholder="Search here"></input>
		<ul id={this.props.id}>
			{map(commonList, (el, i) => {
			return <li key={i}><a href="#">{el}</a></li>
			})}
		</ul>
	</div>
	);
	}
}
export default SearchList;