import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import {fetchAlbums} from './FetchAlbumData';
import AlbumsData from './AlbumData';
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

  componentDidMount() {
    fetchAlbums()
      .then( (data) => {
        this.setState({
          albums: data
        });
      });
  }

  render() {

    const {activePage, albumPerPage } = this.state;

    return(
      <div className="album-container">
      <h1>Albums: </h1>
        <div>
          <AlbumsData albums={this.state.albums} activePage={this.state.activePage} albumPerPage={this.state.albumPerPage} />
        </div>
        <div className="text-center">
            <Pagination
              activePage={this.props.activePage}
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