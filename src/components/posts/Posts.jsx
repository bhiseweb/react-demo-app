import React, { Component } from 'react';
import Show from './Show';
import './post.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.loadPosts();
  }

  handleClick(e) {
    e.preventDefault();

    var userid = this.refs.userid.value;
    var currentPost= this.props.posts.filter(function(item){
      return item.userId == userid
    });
    let show = true;
    this.props.setShow(show);
    this.props.setCurrentPost(currentPost);
  }

  render() {
    return(
      <div className="col-xs-12 text-center">
        <form ref="postForm">
          <label>User ID</label>
          <input className="form-control" ref="userid" type="text" />
          <button type="button" className="btn btn-primary" onClick={this.handleClick}>Post</button>
        </form>
        <div className="container">
          { this.props.show ? <Show userPost={this.props.currentPost} /> : null }
        </div>
      </div>
    );
  }
}

export default Posts;