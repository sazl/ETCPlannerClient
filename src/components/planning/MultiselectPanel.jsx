import React from 'react/addons';

import BaseComponent from 'components/BaseComponent';

import { Button, Glyphicon } from 'react-bootstrap';
import { Multiselect } from 'react-widgets';

import ToolbarPanel from 'components/planning/ToolbarPanel';


export default class MultiselectToolbar extends BaseComponent {

  render() {
    const { header, value, data, ...other } = this.props;
    return (
      <ToolbarPanel
         header={header}
         size={value.length}>
        <div className="btn-group col-xs-12" style={{verticalAlign: 'middle'}}>
          <Multiselect
           value={value}
           data={data}
           {...other}
          />
        </div>
        {/*
        <div className="btn-group btn-group-xs col-xs-3" role="group">
          <Button bsStyle="danger" onClick={this.props.onClearClick}>
            <Glyphicon glyph="remove"/>
          </Button>
          <Button bsStyle="info" onClick={this.props.onAllClick}>
            <Glyphicon glyph="ok-circle"/>
          </Button>
        </div>
        */}
      </ToolbarPanel>
    );
  }
}

MultiselectToolbar.propTypes = {
  header: React.PropTypes.string,
  value: React.PropTypes.array,
  data: React.PropTypes.array,
  onClearClick: React.PropTypes.func,
  onAllClick: React.PropTypes.func
};
