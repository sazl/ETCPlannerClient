import React from 'react';

import connectToStores from 'alt/utils/connectToStores';

import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Glyphicon,
  DropdownButton
} from 'react-bootstrap';

import { NavItemLink } from 'react-router-bootstrap';

import NotificationSystem from 'react-notification-system';

import BaseComponent from 'components/BaseComponent';

import AppActions from 'actions/AppActions';
import AppStore from 'stores/AppStore';

import NotificationActions from 'actions/NotificationActions';
import NotificationStore from 'stores/NotificationStore';


@connectToStores
export default class MainNavbar extends BaseComponent {

  static getStores() {
    return [AppStore, NotificationStore];
  }

  static getPropsFromStores() {
    return {
      showSidebar: AppStore.getState().showSidebar,
      notification: NotificationStore.getState().notification
    };
  }

  constructor(props) {
    super(props);
    this._bind('onCollapseSidebar');
    this.notificationSystem = null;
  }

  componentDidMount() {
    this.notificationSystem = this.refs.notificationSystem;
  }

  componentWillReceiveProps(props) {
    if (props.notification) {
      this.notificationSystem.addNotification(props.notification);
    }
  }

  onCollapseSidebar() {
    AppActions.collapseSidebar();
  }

  render() {
    return (
      <Navbar brand="ETC Planner" className="card-shadow-small" fluid>
        <NotificationSystem ref="notificationSystem" />
        <Nav>
          <NavItemLink to="planner">
            <span>Planner</span>
          </NavItemLink>
        </Nav>
        <Nav>
          <p className="navbar-btn" style={{marginLeft: '20px'}}>
            <Button bsSize="sm" onClick={this.onCollapseSidebar}>
              <Glyphicon glyph={this.props.showSidebar ? "chevron-left" : "chevron-right"}/>
              &nbsp; Menu
            </Button>
          </p>
        </Nav>
        <Nav right>
          <DropdownButton title={<span><Glyphicon glyph="flag"/> Mission</span>} />
          <DropdownButton title={<span><Glyphicon glyph="user"/> Account</span>} />
        </Nav>
      </Navbar>
    );
  }
}

MainNavbar.propTypes = {
};
