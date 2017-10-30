import React, { Component } from 'react';
import $ from 'jquery';
import Pagination from 'react-js-pagination';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      activePage: 1,
      photosPerPage: 12
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageNumber) {
    this.setState({
      activePage: pageNumber
    });
  }

  loadPhotosFromServer() {
    $.ajax({
      url      : 'https://jsonplaceholder.typicode.com/photos',
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

  componentDidMount() {
    this.loadPhotosFromServer();
  }

  render() {

    const {photos, activePage, photosPerPage } = this.state;

    const indexOfLastphoto = activePage * photosPerPage;
    const indexOfFirstphoto = indexOfLastphoto - photosPerPage;
    const currentphoto = photos.slice(indexOfFirstphoto, indexOfLastphoto);

    const renderphotos = currentphoto.map((photos, index) => {
    return(
      <div className="col-lg-3 col-sm-4 col-xs-6" key={index}><a><img className="thumbnail img-responsive" src={photos.url}/></a></div>);
    });

    return(
      <div>
        <h1>Photos</h1>
        <div className="text-center">
          <ul className="list-group col-sm-12">
            {renderphotos}
          </ul>
        </div>
        <div className="text-center">
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={5000}
            pageRangeDisplayed={10}
            onChange={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

export default Photos;