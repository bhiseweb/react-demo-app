import React, { Component } from 'react';
import TaskItem from './TaskItem';
import './showlist.css';

class ShowList extends Component {

  render() {
    return (
      <div className="showlist col-sm-12">
        {
          Object.keys(this.props.showTask).map(function(key)
          {
            return <TaskItem showTask={key} show={this.props.showTask[key]} key={key} />
          }.bind(this))
        }
      </div>
    );
  }
}

export default ShowList;