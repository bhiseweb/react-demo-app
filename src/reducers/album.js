import { SET_ACTIVE_PAGE } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  albums: [],
  activePage: 1,
  albumsPerPage: 10
};

const Albums = (state = initialState, action) => {

  switch (action.type) {
    case 'ALBUMS_RECEIVED':
      return {...state, albums: action.albums};
    case SET_ACTIVE_PAGE:
      return {...state, activePage: action.text};
    default:
      return state
  }
}

export default Albums