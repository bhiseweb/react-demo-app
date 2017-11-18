import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (

      <input type="submit" value={this.props.name} className="btn btn-primary" />

    );
  }
}

export default Button;


