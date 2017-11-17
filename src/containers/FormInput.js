import { connect } from 'react-redux';
import { createInput, addTask, resetInput, removeInput } from '../actions';
import FormInput from '../component/FormInput';

const mapStateToProps = state => ({
   value: state.Value.value,
   count: state.Count.count
})

const mapDispatchToProps = dispatch => ({
  createInput: (count) => {
    dispatch(createInput(count))
  },
  removeInput: (count) => {
    dispatch(removeInput(count))
  },
  addTask: (value) => {
    dispatch(addTask(value))
  },
  resetInput: (value) => {
    dispatch(resetInput(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormInput)
