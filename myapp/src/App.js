import React, { Component } from 'react';
import './style/css/index.css';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { isEmpty } from 'lodash';
import TextBox from './components/common/textBox';
import RadioBox from './components/common/radioBox';
import CheckBox from './components/common/checkBox';

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
      fname: 'Ashok', 
      lname: 'dsf', 
      email: 'sdf',
      mobile: '111',
      dob: '',
      terms: '',
      pass: 'sdf',
    })
  }
  componentWillMount() {
      console.log('hello')
      console.log('hello1')
   }
   componentWillReceiveProps(newProps) {    
      console.log('newProps')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
      console.log(nextProps)
      console.log(nextState)
   }
  render() {
    console.log('here')
    return (
        <div className="App">
         <TextBox 
          id={"fname"}
          label={"First Name"}
          value={this.state.fname}
          handleChange={this.handleChange}
          type={"text"}
          maxLength={9}
          disabled={false}
         /><br/>

         <TextBox 
          id={"lname"}
          label={"Last Name"}
          value={this.state.lname}
          handleChange={this.handleChange}
          type={"text"}
          maxLength={9}
          disabled={false}
         /><br/>

         <TextBox 
          id={"email"}
          label={"Email"}
          value={this.state.email}
          handleChange={this.handleChange}
          type={"email"}
          disabled={false}
         /><br/>

         <TextBox 
          id={"mobile"}
          label={"Mobile"}
          value={this.state.mobile}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>

         <TextBox 
          id={"dob"}
          label={"DOB"}
          value={this.state.dob}
          handleChange={this.handleChange}
          type={"text"}
          disabled={false}
         /><br/>

         <CheckBox 
          id={"terms"}
          label={"Terms & conditions"}
          value="checked"
          handleChange={this.handleCheckClick.bind(this)}
          type={"checkbox"}
          disabled={false}
         /><br/>

         <TextBox 
          id={"pass"}
          label={"Password"}
          value={this.state.pass}
          handleChange={this.handleChange}
          type={"password"}
          disabled={false}
         /><br/>

         <RadioBox 
          label={'Gender'}
          handleClick={this.handleClick.bind(this)}
          id={"radio1"}
          option1 ={"Male"}
          option2 = {"Female"}
          type={"radio"}
         /><br/>
         <br/><br/>
         <button onClick={this.handleSubmit.bind(this)} > Submit </button>
          <ShowDetail objArr={this.state.obj} />
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