import React from 'react/addons';

import BaseComponent from 'components/BaseComponent';

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Glyphicon,
  Fade
} from 'react-bootstrap';

export default class ActionButtons extends BaseComponent {

  render() {
    return (
      <ButtonToolbar>
        <ButtonGroup bsSize="xs">
          <Button bsStyle="success" onClick={this.props.onNew}>
            <Glyphicon glyph="plus"/>
          </Button>
          <Button bsStyle="default" onClick={this.props.onEdit}>
            <Glyphicon glyph="edit"/>
          </Button>
          <Button bsStyle="danger" onClick={this.props.onDelete}>
            <Glyphicon glyph="trash"/>
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );
  }
}

ActionButtons.propTypes = {
  onNew: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func
};
