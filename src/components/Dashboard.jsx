'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

var RouteHandler = Router.RouteHandler;

export default class Dashboard extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={4}>
        <Panel>
        </Panel>
        </Col>
        <Col xs={12} md={4}>
        <Panel>
        </Panel>
        </Col>
        <Col xs={12} md={4}>
        <Panel>
        </Panel>
        </Col>
      </Row>
    );
  }
}
