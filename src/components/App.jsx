'use strict';

import React from 'react/addons';
import Router from 'react-router';
var RouteHandler = Router.RouteHandler;

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

import authenticatedComponent from 'components/AuthenticatedComponent';
import BaseComponent from 'components/BaseComponent';
import MainNavbar from 'components/MainNavbar';
import Sidebar from 'components/Sidebar';

// CSS
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'styles/bootstrap.scss';
import 'styles/main.scss';


export default class App extends BaseComponent {
  render() {
    return (
      <div>
        <MainNavbar />
        <Grid fluid>
          <Row>
            <Col xs={12} md={2}>
            <Sidebar/>
            </Col>
            <Col xs={12} md={10}>
            <RouteHandler/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
