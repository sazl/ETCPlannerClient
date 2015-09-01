import React from 'react/addons';

import Immutable from 'immutable';

import {
  Input,
  Button
} from 'react-bootstrap';

import {
  DateTimePicker,
  DropdownList,
  Multiselect
} from 'react-widgets';

import DateUtils from 'utils/date';

export default class StaffAssignmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffAssignment: Immutable.Map(this.props.staffAssignment || {
        startDate: null,
        endDate: null,
        location: null,
        comments: null,
        staff: null,
        confirmedType: null,
        missionRole: null
      })
    };
  }

  render() {
    console.log(this.state.staffAssignment.toJS());
    return (
      <form>
        <Input label="Mission Role">
          <DropdownList
          data={this.props.missionRoles}
          value={this.state.staffAssignment.get('missionRole')}
          textField={(mr) => { return mr.profileType.profileType; }}
          placeholder="Mission Role"
          filter="contains"
          />
        </Input>
        <Input label="Staff">
          <DropdownList
          data={this.props.staffList}
          textField="fullName"
          value={this.state.staffAssignment.get('staff')}
          placeholder="Staff"
          filter="contains"
          />
        </Input>
        <Input label="Confirmed Type">
          <DropdownList
          data={this.props.confirmedTypes}
          textField="confirmedType"
          value={this.state.staffAssignment.get('confirmedType')}
          placeholder="ConfirmedType"
          filter="contains"
          />
        </Input>
        <Input label="Start Date">
          <DateTimePicker
          time={false}
          value={DateUtils.parseDate(
            this.state.staffAssignment.get('startDate'))}
          format="MMM dd, yyyy"
          />
        </Input>
        <Input label="End Date">
          <DateTimePicker
          time={false}
          value={DateUtils.parseDate(
            this.state.staffAssignment.get('endDate'))}
          format="MMM dd, yyyy"
          />
        <Input
        type="text"
        value={this.state.staffAssignment.get('location')}
        placeholder="Location"
        label="Location"
        hasFeedback
        />
        <Input
        type="text"
        value={this.state.staffAssignment.get('comments')}
        placeholder="Comments"
        label="Comments"
        hasFeedback
        />
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
  staffList: React.PropTypes.array,
  missionRoles: React.PropTypes.array,
  confirmedTypes: React.PropTypes.array,
  profileTypes: React.PropTypes.array,
  onClose: React.PropTypes.func
};
