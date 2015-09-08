import React from 'react';

import connectToStores from 'alt/utils/connectToStores';

import {
  Navbar,
  Nav,
  NavItem,
  Glyphicon,
  DropdownButton
} from 'react-bootstrap';

import { NavItemLink } from 'react-router-bootstrap';

import NotificationSystem from 'react-notification-system';

import BaseComponent from 'components/BaseComponent';

import NotificationActions from 'actions/NotificationActions';
import NotificationStore from 'stores/NotificationStore';


@connectToStores
export default class MainNavbar extends BaseComponent {

  static getStores() {
    return [NotificationStore];
  }

  static getPropsFromStores() {
    return NotificationStore.getState();
  }

  constructor(props) {
    super(props);
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

  render() {
    return (
      <Navbar brand="ETC Planner" className="card-shadow-small" fluid>
        <NotificationSystem ref="notificationSystem" />
        <Nav>
          <NavItemLink to="planner">
            <span>Planner</span>
          </NavItemLink>
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
