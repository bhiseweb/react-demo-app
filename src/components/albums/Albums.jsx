import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import AlbumsData from './AlbumData';
import './album.css'

class Albums extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageNumber) {
    this.props.setActivePage(pageNumber);
  }

  componentDidMount() {
    this.props.loadAlbums();
  }

  render() {

    const indexOfLastalbum = this.props.activePage * this.props.albumsPerPage;
    const indexOfFirstalbum = indexOfLastalbum - this.props.albumsPerPage;
    const currentalbums = this.props.albums.slice(indexOfFirstalbum, indexOfLastalbum);

    const renderalbums = currentalbums.map((albums, index) => {
      return (
        <AlbumsData album={albums} key={index} />
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
              activePage={this.props.activePage}
              itemsCountPerPage={10}
              totalItemsCount={this.props.albums.length}
              pageRangeDisplayed={5}
              onChange={this.handleClick}
            />
        </div>
      </div>
    );
  }
};

export default Albums;