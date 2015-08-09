import React from 'react';

import {
  Row,
  Col,
  Grid,
  Button,
  ButtonGroup,
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Collapse,
  Glyphicon,
  Input
} from 'react-bootstrap';

import { Multiselect } from 'react-widgets';

import 'react-widgets/dist/css/react-widgets.css';

export default class Toolbar extends React.Component {
  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button bsStyle="primary">
            <Glyphicon glyph="menu-down"/>
            &nbsp;Filter
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <DropdownButton title="Sort">
            <MenuItem>
              Test
            </MenuItem>
          </DropdownButton>
        </ButtonGroup>
        <ButtonGroup className="pull-right">
          <Button bsStyle="success">
            <Glyphicon glyph="plus" />
            &nbsp; New Mission
          </Button>
        </ButtonGroup>
        <ButtonGroup className="pull-right">
          <Button bsStyle="warning">
            <Glyphicon glyph="save"/>
            &nbsp; Export
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}
