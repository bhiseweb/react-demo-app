import React, { Component } from 'react';
import {Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class FooterMenu extends Component {
  render() {
    return (
      <div className="FooterMenu">
        <Nav bsStyle="pills" >
          <LinkContainer to="/home">
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/Users">
            <NavItem eventKey={2}>Users</NavItem>
          </LinkContainer>
          <LinkContainer to="/Posts">
            <NavItem eventKey={3}>Posts</NavItem>
          </LinkContainer>
          <LinkContainer to="/Albums">
            <NavItem eventKey={4}>Albums</NavItem>
          </LinkContainer>
          <LinkContainer to="/Photos">
            <NavItem eventKey={5}>Photos</NavItem>
          </LinkContainer>
        </Nav>
      </div>
    );
  }
}

export default FooterMenu;