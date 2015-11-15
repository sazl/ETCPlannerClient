import React from 'react/addons';

import BaseComponent from 'components/BaseComponent';

import { Button, Glyphicon } from 'react-bootstrap';
import { DateTimePicker } from 'react-widgets';

import ToolbarPanel from 'components/planning/ToolbarPanel';


export default class MultiselectToolbar extends BaseComponent {

  headerLabel() {
    if (this.props.startDate && this.props.endDate) {
      return 'Start - End';
    } else if (this.props.startDate) {
      return 'Start';
    } else if (this.props.endDate) {
      return 'End';
    } else {
      return null;
    }
  }

  render() {
    const label = this.headerLabel();
    return (
      <ToolbarPanel
         active={label !== null}
         header={this.props.header}
         label={label}>
        <form>
          <div className="form-group">
            <label className="control-label">Start Date</label>
            <div>
              <DateTimePicker
               format="dd/MM/yyyy"
               value={this.props.startDate}
               time={false}
               onChange={this.props.onStartDateChange}
              />
            </div>
          </div>
          <div>
            <label className="control-label">End Date</label>
            <div>
              <DateTimePicker
               format="dd/MM/yyyy"
               value={this.props.endDate}
               time={false}
               onChange={this.props.onEndDateChange}
              />
            </div>
          </div>
        </form>
      </ToolbarPanel>
    );
  }
}
