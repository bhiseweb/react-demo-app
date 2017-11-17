import React, { Component } from 'react';
import FormInput from '../containers/FormInput';

class AppForm extends Component {

  render() {
    return (
      <div className="container col-sm-6 offset-sm-2">
        <div className="container-fluid">
          <br />
          <div >
            <FormInput displayTask ={this.props.displayTask} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default AppForm;
