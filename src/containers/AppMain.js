import { connect } from 'react-redux';
import { showTask, deleteTask } from '../actions';
import AppMain from '../component/AppMain';

const mapStateToProps = state => ({
  task: state.Task.task
})

const mapDispatchToProps = dispatch => ({
  showTask : (task) => {
    dispatch(showTask(task))
  },
  deleteTask: (task) => {
    dispatch(deleteTask(task))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMain)