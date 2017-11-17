import React, { Component } from 'react';
import '../css/users.css';

export default class UserData extends Component {
  render() {
    return (
      <div className="user-container" >
        <ul className="list-group text-center col-sm-10">
          <li className="list-group-item list-group-item-info" >Name : {this.props.user.name}</li>
          <li className="list-group-item list-group-item-info" >Email ID : {this.props.user.email}</li>
          <li className="list-group-item list-group-item-info" >Address : {this.props.user.address.street}</li>
          <li >
            <button type="button" className="btn btn-info" data-toggle="modal" onClick={this.props.detailsModal.bind(this,this.props.user)} data-target="#myModal" >More Detail</button>
          </li>
        </ul>
      </div>
    );
  }
}