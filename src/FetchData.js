import React, { Component } from 'react';
import $ from 'jquery';

class FetchData extends Component {
  loadAlbumsFromServer() {
    $.ajax({
      url      : "https://jsonplaceholder.typicode.com/albums",
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

  loadPhotosFromServer() {
    $.ajax({
      url      : "https://jsonplaceholder.typicode.com/photos",
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({photos: data});
      },

      error: (xhr, status, err) => {
        console.error('https://jsonplaceholder.typicode.com/photos', status, err.toString());
      }
    });
  }

  loadPostFromServer() {

    $.ajax({
      url      : "https://jsonplaceholder.typicode.com/posts",
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({post: data})
      },

      error: (xhr, status, err) => {
        console.error("https://jsonplaceholder.typicode.com/posts", status, err.toString());
      }
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

}

export default FetchData;
