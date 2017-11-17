import { SET_ACTIVE_PAGE, SET_MODAL_USERS, SET_SHOW_MODAL } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  users: [],
  activePage: 1,
  usersPerPage: 5,
  showModal: false,
  modalusers: []
};

const Users = (state = initialState, action) => {

  switch (action.type) {
    case 'USERS_RECEIVED':
      return {...state, users: action.users};
    case SET_ACTIVE_PAGE:
      return {...state, activePage: action.text};
    case SET_MODAL_USERS:
      return {...state, modalusers: action.text};
    case SET_SHOW_MODAL:
      return {...state, showModal: action.text};
    default:
      return state
  }
}

export default Users