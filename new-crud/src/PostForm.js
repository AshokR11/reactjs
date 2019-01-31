import React, { Component } from 'react';
import {connect} from 'react-redux'

class PostForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.Title.value;
		const message = this.Message.value;
		const data = {
			title,
			message 
		}
		this.props.dispatch({
			type:'ADD_POST',
			data
		})
		this.Title.value = '';
		this.Message.value = '';
	}
	render(){
		return (
			<div className="post-container">
			  <h1 className="post_heading">Create Post</h1>
			  <form className="form" onSubmit={this.handleSubmit} >
				   <input required type="text" ref={(input) => this.Title = input}
				   	placeholder="Enter Post Title" /><br /><br />
				   <textarea required rows="5" ref={(input) => this.Message = input}
				   	cols="28" placeholder="Enter Post" /><br /><br />
				   <button>Post</button>
			  </form>
			</div>
			);
	}
}
// 
// export default PostForm
export default connect()(PostForm);