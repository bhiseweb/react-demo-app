import { connect } from 'react-redux';
import { loadAlbums, setActivePage } from '../actions';
import Albums from '../albums/Albums';

const mapStateToProps = state => ({
  albums: state.Albums.albums,
  activePage: state.Albums.activePage,
  albumsPerPage: state.Albums.albumsPerPage
})

const mapDispatchToProps = dispatch => ({
  loadAlbums : (albums) => {
    dispatch(loadAlbums(albums))
  },
  setActivePage : (activePage) => {
    dispatch(setActivePage(activePage))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums)