import React from 'react/addons';
import classNames from 'classnames';

import BaseComponent from 'components/BaseComponent';

import { Panel } from 'react-bootstrap';


export default class ToolbarPanel extends BaseComponent {

  render() {
    const active = this.props.active || (this.props.size > 0);
    const classes = classNames({
      'label': true,
      'label-default': !active,
      'label-success': active,
      'medium': true,
      'pull-right': true
    });

    return (
      <Panel
       header={<div>
               {this.props.header}
               <span className={classes}>
               {this.props.size || this.props.label}
               </span>
               </div>}
       collapsible>
        {this.props.children}
      </Panel>
    );
  }
}

ToolbarPanel.propTypes = {
  header: React.PropTypes.string,
  size: React.PropTypes.number,
  label: React.PropTypes.string,
  active: React.PropTypes.bool
};
