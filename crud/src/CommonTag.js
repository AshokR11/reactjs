import React, { Component } from 'react';
import { map } from 'lodash';


class CommonTag extends Component {
	keySeperate=(e)=>{
	const listVal = this.props.comVal;
	console.log(listVal)
    if(e.target.value != ''){	
    	if(e.keyCode === 13) {
        var c = e.target.value;
        const obj = {}
        obj['id'] = listVal.length+1
        obj['name'] = c
        listVal.push(obj);
        console.log(listVal)
        e.target.value = ''
        this.setState({
          arrName : listVal
        });
    	}
    }
  }

  removeCurrentVal = (e,id) =>{
  const getValue = this.props.comVal;
  const arrName = this.props.arrName;
    getValue.forEach(function(item, index, array) {
      if (getValue[index]['id'] === id){
        getValue.splice(index, 1);
      }
    });
    this.setState({
        arrName : getValue
    });
  }
render() {
	var obj = this.props.comVal
	var removeCurrentVal = this.removeCurrentVal
return (
<div className="each-sec">
	<p><b>{this.props.tagName}</b>:</p>
	<div className="input-categories">
		<ul>
			{!!obj && map(obj, (el, i) => {
			return <li key={i}>{el.name}<span  onClick = {(event) => removeCurrentVal(event,el.id)}>x</span></li>
			})}
		</ul>
		<input type="text" onKeyDown={this.keySeperate}/>
	</div>
</div>
);
}
}
export default CommonTag;