import React, { Component } from 'react';
import './showlist.css';

class TaskItem extends Component{

  constructor(props) {
    super(props);
    this.state ={
      show: []
    };
    this.delete = this.delete.bind(this);
  }

  delete(id){

    this.setState({show: this.props.showTask});

    delete this.state.show[id];

    this.setState({show: this.props.show});

  }

  render(){
    return(
      <ul className="list col-sm-8 ">
        {
          Object.keys(this.props.show).map(function(key,index)
          {
            return  <li className="list-group-item list-group-item-success" key={key} >
              {this.props.show[key]}
              <span align="right" >
                <button className="btn btn-danger btn-xs" onClick={this.delete.bind(this,index)} >-</button>
              </span>
            </li>
          }.bind(this))
        }
      </ul>
    );
  }
}

export default TaskItem;