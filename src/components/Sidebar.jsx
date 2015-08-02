'use strict';

import React from 'react/addons';

import {
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import '../styles/Sidebar.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <span>Dashboard</span>
        </ListGroupItem>
        <ListGroupItem>
          <span>Planning</span>
        </ListGroupItem>
        <ListGroupItem>
          <span>Staff</span>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
