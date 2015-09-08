import React from 'react/addons';

import BaseComponent from 'components/BaseComponent';

import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Glyphicon,
  OverlayTrigger,
  Popover
} from 'react-bootstrap';

export default class ActionButtons extends BaseComponent {

  render() {
    return (
      <OverlayTrigger
       trigger='click'
       rootClose
       placement='bottom'
       overlay={<Popover title="Actions">
                <ButtonToolbar>
                <ButtonGroup bsSize="xs">
                <Button bsStyle="success" onClick={this.props.onNew}>
                <Glyphicon glyph="plus"/>
                </Button>
                </ButtonGroup>
                <ButtonGroup bsSize="xs">
                <Button bsStyle="default" onClick={this.props.onEdit}>
                <Glyphicon glyph="edit"/>
                </Button>
                </ButtonGroup>
                <ButtonGroup bsSize="xs">
                <Button bsStyle="danger" onClick={this.props.onDelete}>
                <Glyphicon glyph="trash"/>
                </Button>
                </ButtonGroup>
                </ButtonToolbar>
                </Popover>}>
        <Button bsStyle='default' bsSize="xs">
          <Glyphicon glyph="option-horizontal"/>
        </Button>
      </OverlayTrigger>
    );
  }
}

ActionButtons.propTypes = {
  onNew: React.PropTypes.func,
  onEdit: React.PropTypes.func,
  onDelete: React.PropTypes.func
};
