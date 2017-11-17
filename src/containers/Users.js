import { connect } from 'react-redux';
import { loadUsers, setActivePage, setShowModal, setModalUsers } from '../actions';
import Users from '../users/Users';

const mapStateToProps = state => ({
  users: state.Users.users,
  activePage: state.Users.activePage,
  usersPerPage: state.Users.usersPerPage,
  showModal: state.Users.showModal,
  modalusers: state.Users.modalusers
})

const mapDispatchToProps = dispatch => ({
  loadUsers : (users) => {
    dispatch(loadUsers(users))
  },
  setActivePage : (activePage) => {
    dispatch(setActivePage(activePage))
  },
  setShowModal : (showModal) => {
    dispatch(setShowModal(showModal))
  },
  setModalUsers : (modalusers) => {
    dispatch(setModalUsers(modalusers))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)