'use strict';

import React from 'react/addons';
import Router from 'react-router';

let Link = Router.Link;

import {
  ListGroup,
  ListGroupItem,
  Well
} from 'react-bootstrap';

import '../styles/Sidebar.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <span>
            <Link to="dashboard">Dashboard</Link>
          </span>
        </ListGroupItem>
        <ListGroupItem>
          <span>
            <Link to="planning">Planning</Link>
          </span>
        </ListGroupItem>
        <ListGroupItem>
          <span>Staff</span>
        </ListGroupItem>
      </ListGroup>
    );
  }
}
