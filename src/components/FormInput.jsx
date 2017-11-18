import React, { Component } from 'react';
import '../css/formInput.css';

class FormInput extends Component {

  handleChange(i,event) {
    let value= this.props.value.slice();
    value[i] = event.target.value;
    this.props.addTask(value);
  }

  handleClick() {
    var count = this.props.count;
    count = count + 1 ;
    this.props.createInput(count);
    this.createInput();
  }

  createInput() {
    let uiItems = [];
    for(let i = 0; i < this.props.count; i++){
      uiItems.push(
        <div key={i} className="FormInput" >
          <input type="text" value={this.props.value[i] || ''} ref="taskInput" onChange={this.handleChange.bind(this,i)} />
          <input type='button' className="btn btn-primary" value='+' onClick={this.handleClick.bind(this)} />
        </div>
      )
    }
    return uiItems || null;
  }

  addTaskItem()
  {
    let value = this.props.value;
    this.props.displayTask(value);
    this.deleteInputField();
  }

  deleteInputField()
  {
    let value = [];
    let count = 1;
    this.props.removeInput(count);
    this.props.resetInput(value);
  }

  render() {
    return (
        <div className="form-group">
          {this.createInput()}
          <br />
          <button name="Submit" className="btn btn-primary" onClick={this.addTaskItem.bind(this)} >Submit</button>
        </div>
    );
  }
}

export default FormInput;