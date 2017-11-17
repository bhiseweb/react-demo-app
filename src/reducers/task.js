import { SHOW_TASK, DELETE_TASK } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  task: []
}

const Task = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TASK:
      return {
        ...state,
        task: action.text
      };
    case DELETE_TASK:
      return {
        ...state,
        task: action.text
      };
    default:
      return state;
  }
}

export default Task