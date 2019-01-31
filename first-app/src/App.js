import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import TextBox from './CommonComponents/textBox';
import DropDown from './CommonComponents/dropDown';

const User = (params) => {
  return ( <h1> Welcome User {params.username} </h1>)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      mobile: '',
      dob: '',
      terms: '',
      gender: '',
      radio1: '',
      pass: '',
      obj:{}
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick(e){
    this.setState({
      gender: e.target.id
    })
  }
  handleCheckClick(e){
    if (e.target.checked==true){
    this.setState({
      terms: "checked"
    })
    }
  }
  handleSubmit(){
    const reqObj = {
      "fname": this.state.fname, 
      "lname": this.state.lname, 
      "email": this.state.email, 
      "mobile": this.state.mobile, 
      "dob": this.state.dob, 
      "gender": this.state.gender,
      "terms": this.state.terms,
      "password": this.state.pass
    }
    this.setState({
      fname: '', 
      lname: '', 
      email: '',
      mobile: '',
      dob: '',
      terms: '',
      pass: '',
      obj:reqObj 
    })
  }
  componentDidMount() {
    console.log('bye')
     this.setState({
      fname: '', 
      lname: '', 
      email: '',
      mobile: '',
      dob: '',
      terms: '',
      pass: '',
    })
  }
 
  render() {
    console.log('here')
    return (
        <div className="App">
         <TextBox 
          id = "provider"
          label = "Provider"
          value = {this.state.fname}
          handleChange = {this.handleChange}
          type = {"text"}
          maxLength = {9}
          disabled = {false}
         /><br/>

         <TextBox 
          id="type"
          label="Type"
          value={this.state.lname}
          handleChange={this.handleChange}
          type={"text"}
          maxLength={9}
          disabled={false}
         /><br/>

         <TextBox 
          id={"source"}
          label="Source URL"
          value={this.state.email}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>

         <TextBox 
          id={"partner"}
          label="Partner ID"
          value={this.state.mobile}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>

         <TextBox 
          id="field1"
          label="Flex field1"
          value={this.state.dob}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>
         <TextBox 
          id="field2"
          label="Flex field2"
          value={this.state.pass}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>
         <TextBox 
          id="field3"
          label="Flex field3"
          value={this.state.pass}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>
         <TextBox 
          id="field4"
          label="Flex field4"
          value={this.state.pass}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>
         <TextBox 
          id="text"
          label="text"
          value={this.state.pass}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>
         
        </div>
    );
  }
}


class ShowDetail extends Component{
  
  render(){

    const detail = this.props.objArr

    return !isEmpty(detail)&&(
        <div className="details">
        <table id="customers">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Terms</th>
            <th>Password</th>
          </tr>
          <tr>
            <td>{detail.fname}</td>
            <td>{detail.lname}</td>
            <td>{detail.email}</td>
            <td>{detail.mobile}</td>
            <td>{detail.dob}</td>
            <td>{detail.gender}</td>
            <td>{detail.terms}</td>
            <td>{detail.password}</td>
          </tr>
        </table>
        </div>

      )
  }
}

export default App;