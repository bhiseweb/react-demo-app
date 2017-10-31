import React, { Component } from 'react';

class AlbumsData extends Component {

  render(){
    const indexOfLastalbum = this.props.activePage * this.props.albumPerPage;
    const indexOfFirstalbum = indexOfLastalbum - this.props.albumPerPage;
    const currentalbums = this.props.albums.slice(indexOfFirstalbum, indexOfLastalbum);

    const renderalbums = currentalbums.map((album, index) => {
      return (
        <div className="album-container" key={index} >
          <ul className="list-group col-lg-10">
            <li className="list-group-item list-group-item-info">ID : {album.id}</li>
            <li className="list-group-item list-group-item-info">User ID : {album.userId}</li>
            <li className="list-group-item list-group-item-info">Title : {album.title}</li>
          </ul>
        </div>
        );
    });

    return(
      <div className="container text-center col-sm-12">
        <ul className="list-group col-sm-12">
          {renderalbums}
        </ul>
      </div>
    );
  }
}

export default AlbumsData;
