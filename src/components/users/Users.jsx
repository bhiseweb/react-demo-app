import React, { Component } from 'react';
import MoreDetails from './MoreDetails';
import UserData from './UserData';
import Pagination from 'react-js-pagination';
import { Link } from 'react-router-dom';
import './users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.detailsModal = this.detailsModal.bind(this);
  }

  handleClick(pageNumber) {
    this.props.setActivePage(pageNumber);
  }

  detailsModal(modalusers){
    let showModal = true;
    this.props.setShowModal(showModal);
    this.props.setModalUsers(modalusers);
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const indexOfLastuser = this.props.activePage * this.props.usersPerPage;
    const indexOfFirstuser = indexOfLastuser - this.props.usersPerPage;
    const currentusers = this.props.users.slice(indexOfFirstuser, indexOfLastuser);

    const renderusers = currentusers.map((users, index) => {
      return (
        <UserData user={users} detailsModal={this.detailsModal} key={index}/>
      );
    });
    return(
      <div className="user-container">
        <Link to='/CreateUser' className="btn btn-primary">New User</Link>
        <h1>Users: </h1>
        <div className="user-container text-center">
          <ul className="user-container list-group text-center col-sm-12">
            {renderusers}
          </ul>
        </div>
        <div className="text-center">
          <Pagination
            activePage={this.props.activePage}
            itemsCountPerPage={5}
            totalItemsCount={this.props.users.length}
            pageRangeDisplayed={2}
            onChange={this.handleClick}
          />
        </div>
        { this.props.showModal ? <MoreDetails modalusers={this.props.modalusers} /> : null}
      </div>
    );
  }
};

export default Users;