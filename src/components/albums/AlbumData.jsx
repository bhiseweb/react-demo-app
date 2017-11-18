import React, { Component } from 'react';

class AlbumsData extends Component {
  render(){
    return (
      <div className="album-container" >
        <ul className="list-group col-lg-10">
          <li className="list-group-item list-group-item-info">ID : {this.props.album.id}</li>
          <li className="list-group-item list-group-item-info">User ID : {this.props.album.userId}</li>
          <li className="list-group-item list-group-item-info">Title : {this.props.album.title}</li>
        </ul>
      </div>
    );
  }
}

export default AlbumsData;
