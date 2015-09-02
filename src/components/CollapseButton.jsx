import React from 'react';

import { Button, Glyphicon } from 'react-bootstrap';

class CollapseButton extends React.Component {

  render() {
    const text = this.props.text ?
    <span>{this.props.text}<Glyphicon glyph="menu-right"/></span>
    : <Glyphicon glyph="menu-right"/>;
    const bsStyle = this.props.isCollapsed ? (this.props.bsStyle || 'info') : 'default';
    const label = this.props.isCollapsed ? text : <Glyphicon glyph="menu-down"/>;
    return (
      <Button
       bsSize="xs"
       onClick={this.props.onClick}
       bsStyle={bsStyle}>
        {label}
      </Button>
    );
  }
}

CollapseButton.propTypes = {
  text: React.PropTypes.string,
  isCollapsed: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  bsStyle: React.PropTypes.string
};

module.exports = CollapseButton;
