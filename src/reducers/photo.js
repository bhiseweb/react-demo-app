import { SET_ACTIVE_PAGE } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  photos: [],
  activePage: 1,
  photosPerPage: 12
};

const Photos = (state = initialState, action) => {

  switch (action.type) {
    case 'PHOTOS_RECEIVED':
      return {...state, photos: action.photos};
    case SET_ACTIVE_PAGE:
      return {...state, activePage: action.text};
    default:
      return state
  }
}

export default Photos