import React, { Component } from 'react';
import {PageHeader, Row, Col} from 'react-bootstrap';
import AppList from './applist/AppList.jsx';
import AppForm from './appform/AppForm.jsx';
import './appmain.css'

class AppMain extends Component {
  constructor(props){
    super(props);
    this.state = {
      showTask:[],
      showCount: 1
    };
    this.addShowTask = this.addShowTask.bind(this);
  }

  addShowTask(showTaskItem)
  {
    this.state.showTask['showtask-'+ this.state.showCount++] = showTaskItem;

    this.setState({ showTask : this.state.showTask });
  }

  render() {
    return (
      <div className="App-main">
        <div className="App-container">
          <Row className="show-grid appmain">
            <Col md={6} mdPush={6}>
              <PageHeader className="Page-Header">Task Form</PageHeader>
              <AppForm addShowTask={this.addShowTask} />
            </Col>
            <Col md={6} mdPull={6}>
              <PageHeader className="Page-Header">Task List</PageHeader>
              <AppList showTask={this.state.showTask} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AppMain;
