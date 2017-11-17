import { SET_SHOW, SET_CURRENT_POST } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  text: '',
  posts: [],
  currentPost: [],
  show: false
};

const Posts = (state = initialState, action) => {

  switch (action.type) {
    case 'POSTS_RECEIVED':
      return {...state, posts: action.posts};
    case SET_SHOW:
      return {...state, show: action.text};
    case SET_CURRENT_POST:
      return {...state, currentPost: action.text};
    default:
      return state
  }
}

export default Posts