import React, { Component } from 'react';
import $ from 'jquery';
import Pagination from 'react-js-pagination';
import './album.css'

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      activePage: 1,
      albumPerPage: 10
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageNumber) {
    this.setState({
      activePage: pageNumber
    });
  }

  loadAlbumsFromServer() {
    $.ajax({
      url      : 'https://jsonplaceholder.typicode.com/albums',
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({albums: data});
      },

      error: (xhr, status, err) => {
        console.error('https://jsonplaceholder.typicode.com/albums', status, err.toString());
      }
    });
  }

  componentDidMount() {
    this.loadAlbumsFromServer();
  }

  render() {

    const {albums, activePage, albumPerPage } = this.state;

    const indexOfLastalbum = activePage * albumPerPage;
    const indexOfFirstalbum = indexOfLastalbum - albumPerPage;
    const currentalbums = albums.slice(indexOfFirstalbum, indexOfLastalbum);

    const renderalbums = currentalbums.map((albums, index) => {
      return (
        <div className="album-container" key={index} >
          <ul className="list-group col-lg-10">
            <li className="list-group-item list-group-item-info">ID : {albums.id}</li>
            <li className="list-group-item list-group-item-info">User ID : {albums.userId}</li>
            <li className="list-group-item list-group-item-info">Title : {albums.title}</li>
          </ul>
        </div>
      );
    });

    return(
      <div className="album-container">
      <h1>Albums: </h1>
        <div className="container text-center col-sm-12">
          <ul className="list-group col-sm-12">
            {renderalbums}
          </ul>
        </div>
        <div className="text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={10}
            totalItemsCount={100}
            pageRangeDisplayed={5}
            onChange={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

export default Albums;