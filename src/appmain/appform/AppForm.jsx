import React, { Component } from 'react';
import FormInput from './FormInput';

class AppForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      task:[],
      count: 0
    };
  }

  render() {
    return (
      <div className="container col-sm-6 offset-sm-2">
        <div className="container-fluid">
          <br />
          <div>
            <FormInput addShowTask={this.props.addShowTask} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default AppForm;
