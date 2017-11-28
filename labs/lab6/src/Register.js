// The Title used first_name value.
// If type wrong email. The warning will show.
// If type different passwords, the warining will show.


import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
import './Register.css';

const HomeIcon = (props) => (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </SvgIcon>
    );


class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      repeatpassword:'',
      shouldHide:'hidden',
      passwordHide:'hidden'
    }
  }
  
  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validate(email) {
    this.setState({email:email});
    if (this.validateEmail(email)) {
      this.setState({shouldHide:'hidden'});
    } else {
      this.setState({shouldHide:''});
    }
  }

  helloName() {
    if (this.state.first_name === '') {
      return "Register React Example";
    } else {
      return "Hello, " + this.state.first_name;
    }
  }

  validatePassword(repeatpassword=this.state.repeatpassword) {
    
    if (this.state.password === repeatpassword) {
      this.setState({passwordHide:'hidden'});
    } else {
      this.setState({passwordHide:''});
    }
  }

  handleClick(event) {
    this.validatePassword();
  }

  

  render() {
    // this.test();
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title= {this.helloName()}
             iconElementLeft={<IconButton><HomeIcon /></IconButton>}
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.validate(newValue)}
             />
           <br/>
           <span className={this.state.shouldHide ? 'hidden' : ''}>Email is invalid.</span>
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Repeat your Password"
             floatingLabelText="Repeat Password"
             onChange = {(event,newValue) => {this.setState({repeatpassword:newValue});this.validatePassword(newValue);}}
             />
           <br/>
           <span className={this.state.passwordHide ? 'hidden' : ''}>Password is not same.</span>
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};


export default Register;