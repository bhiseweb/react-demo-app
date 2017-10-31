import React, { Component } from 'react';
import Show from './Show';
import {fetchPost} from './FetchPostData';
import './post.css'

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      currentPost:[],
      show:false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    fetchPost()
      .then( (data) => {
        this.setState({
          post: data
        });
      });
  }

  handleClick(e) {
    e.preventDefault();

    var userid = this.refs.userid.value;
    var currentPost= this.state.post.filter(function(item){
      return item.userId == userid
    });
    this.setState({currentPost:currentPost, show: true});
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
          { this.state.show ? <Show userPost={this.state.currentPost} /> : null }
        </div>
      </div>
    );
  }
}

export default Posts;