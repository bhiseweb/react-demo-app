import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pageNumber) {
    this.props.setActivePage(pageNumber);
  }

  componentDidMount() {
    this.props.loadPhotos();
  }

  render() {

    const indexOfLastphoto = this.props.activePage * this.props.photosPerPage;
    const indexOfFirstphoto = indexOfLastphoto - this.props.photosPerPage;
    const currentphoto = this.props.photos.slice(indexOfFirstphoto, indexOfLastphoto);
    const renderphotos = currentphoto.map((photos, index) => {

    return(
      <div className="col-lg-3 col-sm-4 col-xs-6" key={index}><a><img alt="" className="thumbnail img-responsive" src={photos.url} /></a></div>);
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
            activePage={this.props.activePage}
            itemsCountPerPage={12}
            totalItemsCount={this.props.photos.length}
            pageRangeDisplayed={10}
            onChange={this.handleClick}
          />
        </div>
      </div>
    );
  }
};

export default Photos;