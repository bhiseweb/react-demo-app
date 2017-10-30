import React, { Component } from 'react';
import $ from 'jquery';
import MoreDetails from './MoreDetails';
import Pagination from 'react-js-pagination';
import './users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      activePage: 1,
      userPerPage: 5,
      showModal: false,
      modalusers: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.detailsModal = this.detailsModal.bind(this);
  }

  handleClick(pageNumber) {
    this.setState({
      activePage: pageNumber
    });
  }

  loadUsersFromServer() {
    $.ajax({
      url      : "https://jsonplaceholder.typicode.com/users",
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({users: data});
      },

      error: (xhr, status, err) => {
        console.error("https://jsonplaceholder.typicode.com/users", status, err.toString());
      }
    });
  }

  detailsModal(user){
    this.setState({showModal: true });
    this.setState({modalusers: user});
  }

  componentDidMount() {
    this.loadUsersFromServer();
  }

  render() {

    const { users, activePage, userPerPage } = this.state;

    const indexOfLastuser = activePage * userPerPage;
    const indexOfFirstuser = indexOfLastuser - userPerPage;
    const currentusers = users.slice(indexOfFirstuser, indexOfLastuser);

    const renderusers = currentusers.map((user, index) => {
      return (
        <div className="user-container" key={index} >
          <ul className="list-group text-center col-sm-10">
            <li className="list-group-item list-group-item-info" >Name : {user.name}</li>
            <li className="list-group-item list-group-item-info" >Email ID : {user.email}</li>
            <li className="list-group-item list-group-item-info" >Address : {user.address.street}</li>
            <li >
              <button type="button" className="btn btn-info" data-toggle="modal" onClick={this.detailsModal.bind(this,user)} data-target="#myModal" >More Detail</button>
            </li>
          </ul>
        </div>
      );
    });

    return(
      <div className="user-container">
        <h1>Users Listed Below: </h1>
        <div className="user-container text-center">
          <ul className="user-container list-group text-center col-sm-12">
            {renderusers}
          </ul>
        </div>
        <div className="text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={5}
            totalItemsCount={10}
            pageRangeDisplayed={2}
            onChange={this.handleClick}
          />
        </div>
        { this.state.showModal ? <MoreDetails modalusers={this.state.modalusers} /> : null}
      </div>
    );
  }
};

export default Users;