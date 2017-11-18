import React, { Component } from 'react';
import './users.css';
import Button from '../Button';
import Input from '../Input';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      user: this.props.user
    }
  }

  handleSubmit() {
    console.log(this.state);
    this.props.saveUser(this.state.user)
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }));
  }

  render() {
    return(
      <div className="user-container">
        <form onSubmit={this.handleSubmit}>
          <Input type='text' name='name' label='Name' onChange={this.handleChange}></Input>
          <Input type='email' name='email' label='Email' onChange={this.handleChange}></Input>
          <Input type='text' name='address' label='Address' onChange={this.handleChange}></Input>
          <Button name="Submit" /> 
        </form>
      </div>
    );
  }
};

export default CreateUser;