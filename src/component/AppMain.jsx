import React, { Component } from 'react';
import {PageHeader, Row, Col} from 'react-bootstrap';
import AppList from './AppList';
import AppForm from './AppForm';
import '../css/appmain.css';

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.displayTask = this.displayTask.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  displayTask(taskItem){
    let tasks = taskItem;
    this.props.showTask(tasks);
  }

  deleteItem(id){
    let newTask;
    newTask = this.props.task;
    newTask = newTask.filter(function(val, index) {  return index !== id })
    this.props.deleteTask(newTask);
  }

  render() {
    return (
      <div className="App-main">
        <div className="App-container">
          <Row className="show-grid appmain">
            <Col md={6} mdPush={6}>
              <PageHeader className="Page-Header">Task Form</PageHeader>
              <AppForm  displayTask={this.displayTask} />
            </Col>
            <Col md={6} mdPull={6}>
              <PageHeader className="Page-Header">Task List</PageHeader>
              <AppList  task={this.props.task} deleteItem={this.deleteItem} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppMain;
