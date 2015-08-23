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


export default class StaffAssignmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      missionRole: this.props.staffAssignment || {}
    };
  }

  render() {
    return (
      <form>
        <Input label="Mission Role">
          <DropdownList placeholder="Mission Role" filter="contains" />
        </Input>
        <Input label="Staff">
          <DropdownList placeholder="Staff" filter="contains" />
        </Input>
        <Input type="text" placeholder="Location" label="Location" hasFeedback />
        <Input label="Start Date">
          <DateTimePicker time={false} format="MMM dd, yyyy"/>
        </Input>
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

StaffAssignmentForm.propTypes = {
  staffAssignment: React.PropTypes.object,
  onClose: React.PropTypes.func
};
