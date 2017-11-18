import React, { Component } from 'react';
import '../css/showlist.css';

class ShowList extends Component {

  deleteListItem(id){
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div className="showlist col-sm-12" >
        <ul className="list col-sm-8 ">
          {
            Object.keys(this.props.task).map(function(key,index)
            {
              return <li id="index" className="list-group-item list-group-item-success" key={key} >
                {this.props.task[key]}
                <span align="right" >
                  <button type="submit" className="btn btn-danger btn-xs" onClick={this.deleteListItem.bind(this,index)} >-</button>
                </span>
              </li>
            }.bind(this))
          }
        </ul>
      </div>
    );
  }
}

export default ShowList;