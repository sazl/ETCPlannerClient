'use strict';

import React from 'react/addons';
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import Router from 'react-router';
const RouteHandler = Router.RouteHandler;

import connectToStores from 'alt/utils/connectToStores';

import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';


import authenticatedComponent from 'components/AuthenticatedComponent';
import BaseComponent from 'components/BaseComponent';
import MainNavbar from 'components/MainNavbar';
import Sidebar from 'components/Sidebar';

import AppStore from 'stores/AppStore';

// CSS
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'styles/bootstrap.scss';
import 'styles/main.scss';

@connectToStores
export default class App extends BaseComponent {

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return AppStore.getState();
  }

  render() {
    return (
      <div>
        <MainNavbar/>
        <Grid fluid>
          <Row>
            <ReactCSSTransitionGroup transitionName="fade">
              {this.props.showSidebar ?
              <Col md={2} xs={6} >
                <Sidebar />
              </Col>
              :
              null}
            </ReactCSSTransitionGroup>

            <Col md={this.props.showSidebar ? 10 : 12} xs={6}>
              <RouteHandler/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
