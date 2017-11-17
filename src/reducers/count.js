import { CREATE_INPUT, REMOVE_INPUT } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  count: 1
};

const Count = (state = initialState, action) => {

  switch (action.type) {
    case CREATE_INPUT:
      return {
        ...state,
        count: action.text
      };
    case REMOVE_INPUT:
      return {
        ...state,
        count: action.text
      };
    default:
      return state;
  }
}

export default Count