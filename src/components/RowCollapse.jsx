import React from 'react';
import { Collapse, Button, Glyphicon } from 'react-bootstrap';

class RowCollapse extends React.Component {

  constructor(...args) {
    super(...args);
    this._onClick = this._onClick.bind(this);
    this.state = {
      collapsed: this.props.defaultCollapsed
    };
  }

  _onClick() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    var { collapsed, children, ...props } = this.props;
    return (
      <Collapse {...props} in={collapsed}>
          <tr className="info">
            <td className="text-center">
              <Button bsSize="xs" onClick={this._onClick}>
                <Glyphicon glyph="menu-down"/>
              </Button>
            </td>
            {children}
          </tr>
      </Collapse>
    );
  }
}

RowCollapse.propTypes = {
  collapsed: React.PropTypes.bool,
  defaultCollapsed: React.PropTypes.bool
};

module.exports = RowCollapse;
