import React, { Component } from 'react';
import './post.css'

class Show extends Component {

  render() {
    const renderpost = this.props.userPost.map((post, index) => {
      return (
        <div className="post-row" key={index} >
          <ul className="list-inline text-center col-sm-12">
            <li className="list-group-item list-group-item-info" ><strong>Title : {post.title}</strong></li>
            <li className="list-group-item list-group-item-info" >{post.body}</li>
          </ul>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="panel panel-info">
          <div className="panel-heading"> Post for UserID:</div>
            <div className="panel-body">
              <ul className="list-group text-center col-sm-12 ">
                {renderpost}
              </ul>
            </div>
        </div>
      </div>
    );
  }
}


export default Show;


