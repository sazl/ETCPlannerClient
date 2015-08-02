'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Button,
  Grid,
  Row,
  Col,
  ListGroup, ListGroupItem,
  Navbar,
  Nav,
  NavItem,
  DropdownButton,
  MenuItem,
  Panel
} from 'react-bootstrap';

import authenticatedComponent from './AuthenticatedComponent';
import Sidebar from './Sidebar';

// CSS
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';

var RouteHandler = Router.RouteHandler;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar brand="ETC Planner" fluid>
          <Nav>
            <NavItem>
              <span>Planner</span>
            </NavItem>
            <NavItem>
              <span>ETC</span>
            </NavItem>
          </Nav>
          <Nav right>
            <DropdownButton title="Account" bsStyle="danger">
            </DropdownButton>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col xs={6} md={2}>
              <Sidebar/>
            </Col>
            <Col xs={6} md={10}>
              <Panel>
                <RouteHandler/>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
