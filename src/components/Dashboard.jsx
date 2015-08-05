'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Row,
  Col
} from 'react-bootstrap';

var RouteHandler = Router.RouteHandler;

export default class Dashboard extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={4}>
          <ul>

          </ul>
        </Col>
        <Col xs={12} md={4}>2</Col>
      </Row>
    );
  }
}
