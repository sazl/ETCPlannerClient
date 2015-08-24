import React from 'react';

import { Button, Glyphicon } from 'react-bootstrap';

class CollapseButton extends React.Component {
  render() {
    return (
      <Button bsSize="xs" onClick={this.props.onClick}
              bsStyle={this.props.isCollapsed ? 'info' : 'default'}>
        {this.props.isCollapsed ? <Glyphicon glyph="menu-right"/> : <Glyphicon glyph="menu-down"/>}
      </Button>
    );
  }
}

CollapseButton.propTypes = {
  isCollapsed: React.PropTypes.bool,
  onClick: React.PropTypes.func
};

module.exports = CollapseButton;
