import React from 'react/addons';
import {
  Input,
  Button
} from 'react-bootstrap';

import {
  DateTimePicker,
  DropdownList,
  Multiselect
} from 'react-widgets';


export default class MissionRoleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missionRole: this.props.missionRole || {}
    };
  }

  render() {
    return (
      <form>
        <Input label="Mission">
          <DropdownList placeholder="Mission" filter="contains" />
        </Input>
        <div className="form-group">
          <label>Profile Type</label>
          <DropdownList placeholder="Profile Type" filter="contains" />
        </div>
        <Input type="text" placeholder="Location" label="Location" hasFeedback />

        <div className="form-group">
          <label>Start Date</label>
          <DateTimePicker time={false} format="MMM dd, yyyy"/>
        </div>

        <Input label="End Date">
          <DateTimePicker time={false} format="MMM dd, yyyy"/>
        </Input>
        <hr/>
        <div className="pull-right">
          <Button onClick={this.props.onClose}>Close</Button>
          <Button bsStyle='primary'>Save changes</Button>
        </div>
        <div className="clearfix"/>
      </form>
    );
  }
}

MissionRoleForm.propTypes = {
  missionRole: React.PropTypes.object,
  onClose: React.PropTypes.func
};
