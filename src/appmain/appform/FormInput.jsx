import React, { Component } from 'react';
import Button from './Button';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      task: [],
      count: 1
    };
    this.showTask = this.showTask.bind(this);
  }

  handleChange(i, event) {
    let value = this.state.value.slice();

    value[i] = event.target.value;

    this.setState({value});

  }

  addClick(){
    this.setState({count: this.state.count+1})
  }

  createUI(){
    let uiItems = [];

    for(let i = 0; i < this.state.count; i++){
      uiItems.push(
        <div key={i}>
          <input type="text" ref="taskInput" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
          <input type='button' className="btn btn-primary" value='+' onClick={this.addClick.bind(this,i)}/>
        </div>
      )
    }
    return uiItems || null;
  }

  showTask(e)
  {
    e.preventDefault();
    //showTaskItem variable take all list data
    let value = this.state.value;

    this.state.task['task-'+ this.state.count++] = value;

    this.setState({ task : this.state.task });

    if(this.state.count>=1){
      this.props.addShowTask(value);
    }
    this.deleteinputTask();
  }

   deleteinputTask()
  {
    this.state.count=1;
    this.setState({ count : this.state.count});
    this.setState({task: []});
    this.setState({value: []})
  }

  render() {
    return (
        <div className="form-group">
        <form className="form" ref="taskForm" onSubmit={this.showTask}>
          {this.createUI()}
          <br />
          <Button  name="Submit" className="btn btn-primary" />
          </form>
        </div>
    );
  }
}

export default FormInput;