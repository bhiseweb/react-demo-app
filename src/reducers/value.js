import { RESET_INPUT, ADD_TASK } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  value: []
};

const Value = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        value: action.text
      };
    }
    case RESET_INPUT:
      return {
        ...state,
        value: action.text
      };
    default:
      return state;
  }
}

export default Value