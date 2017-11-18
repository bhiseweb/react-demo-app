import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    return (      
      <div className="form-group">
        <label>{this.props.label}</label>
        <input type={this.props.type} name={this.props.name} className="form-control" onChange={this.props.onChange}/>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};


export default Input;
