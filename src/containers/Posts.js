import { connect } from 'react-redux';
import { loadPosts, setCurrentPost, setShow } from '../actions';
import Posts from '../post/Posts';

const mapStateToProps = state => ({
  posts: state.Posts.posts,
  show: state.Posts.show,
  currentPost: state.Posts.currentPost,
})

const mapDispatchToProps = dispatch => ({
  loadPosts : (posts) => {
    dispatch(loadPosts(posts))
  },
  setShow : (show) => {
    dispatch(setShow(show))
  },
  setCurrentPost : (currentPost) => {
    dispatch(setCurrentPost(currentPost))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)