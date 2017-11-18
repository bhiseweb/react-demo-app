import { SET_ACTIVE_PAGE, SET_MODAL_USERS, SET_SHOW_MODAL, CREATE_USER, USER_CREATED } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  users: [],
  activePage: 1,
  usersPerPage: 5,
  showModal: false,
  modalusers: [],
  user: {}
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
    case CREATE_USER:
      return {...state, user: action.payload};
    case USER_CREATED:
      return {...state, user: action.user};
    default:
      return state
  }
}

export default Users