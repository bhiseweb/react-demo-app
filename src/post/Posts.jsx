import React, { Component } from 'react';
import $ from 'jquery';
import Show from './Show';
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
    this.loadPostFromServer();
  }

  handleClick(e) {
    e.preventDefault();

    var userid = this.refs.userid.value;
    var currentPost= this.state.post.filter(function(item){
      return item.userId==userid
    });
    this.setState({currentPost:currentPost, show: true});
  }

  loadPostFromServer() {

    var root = 'https://jsonplaceholder.typicode.com/posts';
    $.ajax({
      url      : root,
      dataType : 'json',
      type     : 'GET',

      success: data => {
        this.setState({post: data})
      },

      error: (xhr, status, err) => {
        console.error(root, status, err.toString());
      }
    });
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