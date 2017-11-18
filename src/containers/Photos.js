import { connect } from 'react-redux';
import { loadPhotos, setActivePage } from '../actions';
import Photos from '../components/photos/Photos';

const mapStateToProps = state => ({
  photos: state.Photos.photos,
  activePage: state.Photos.activePage,
  photosPerPage: state.Photos.photosPerPage
})

const mapDispatchToProps = dispatch => ({
  loadPhotos : (photos) => {
    dispatch(loadPhotos(photos))
  },
  setActivePage : (activePage) => {
    dispatch(setActivePage(activePage))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photos)