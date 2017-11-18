import { connect } from 'react-redux';
import { createUser } from '../actions';
import CreateUser from '../components/users/CreateUser';

const mapStateToProps = state => ({
  user: state.Users.user
})

const mapDispatchToProps = dispatch => ({
  saveUser: (user) => {
    dispatch(createUser(user))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser)