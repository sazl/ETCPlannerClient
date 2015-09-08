'use strict';

import React from 'react/addons';
import Router from 'react-router';

let Link = Router.Link;

import {
  ListGroup,
  ListGroupItem,
  Glyphicon,
  Button,
  Well
} from 'react-bootstrap';

import {
  ListGroupItemLink
} from 'react-router-bootstrap';

import '../styles/Sidebar.scss';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ListGroup fill className="sidebar-nav">
        <ListGroupItemLink to="dashboard">
          <span>
            <Glyphicon glyph="home" style={{paddingRight: 10}}/>
            Dashboard
          </span>
        </ListGroupItemLink>
        <ListGroupItemLink to="planning">
          <span>
            <Glyphicon glyph="time" style={{paddingRight: 10}}/>
            Planning
          </span>
        </ListGroupItemLink>
        <ListGroupItemLink to="requirement">
          <span>
            <Glyphicon glyph="check" style={{paddingRight: 10}}/>
            Requirements
          </span>
        </ListGroupItemLink>
      </ListGroup>
    );
  }
}
