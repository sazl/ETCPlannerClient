import React from 'react/addons';

import Immutable from 'immutable';

import {
  Input,
  Button,
  Modal
} from 'react-bootstrap';

import {
  DateTimePicker,
  DropdownList,
  Multiselect
} from 'react-widgets';

import { ValidatedInput } from 'react-bootstrap-validation';

import BaseComponent from 'components/BaseComponent';

import ValidatedForm from 'components/inputs/ValidatedForm';
import ValidatedDropdownList from 'components/inputs/ValidatedDropdownList';
import ValidatedDateTimePicker from 'components/inputs/ValidatedDateTimePicker';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

export default class StaffAssignmentForm extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind(
      'handleMissionRoleChange',
      'handleStaffChange',
      'handleConfirmedTypeChange',
      'handleStartDateChange',
      'handleEndDateChange',
      'handleLocationChange',
      'handleCommentsChange',
      'handleValidSubmit',
      'renderProfileTypeErrorModal'
    );
    this.state = {
      staffAssignment: Immutable.Map(props.staffAssignment || {
        startDate: null,
        endDate: null,
        location: null,
        comments: null,
        staff: null,
        confirmedType: null,
        missionRole: props.missionRole
      }),
      showProfileTypeError: false
    };
  }

  handleMissionRoleChange(missionRole) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'missionRole',
        missionRole
      )
    });
  }

  handleStaffChange(staff) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'staff',
        staff
      )
    });
  }

  handleConfirmedTypeChange(confirmedType) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'confirmedType',
        confirmedType
      )
    });
  }

  handleStartDateChange(startDate) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'startDate',
        startDate
      )
    });
  }

  handleEndDateChange(endDate) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'endDate',
        endDate
      )
    });
  }

  handleLocationChange(location) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'location',
        location
      )
    });
  }

  handleCommentsChange(comments) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'comments',
        comments
      )
    });
  }

  _validateProfileType(missionRole, staff) {
    const profileTypeIds = Utils.getField({
      many: true,
      data: staff.profileTypes
    });
    const valid = profileTypeIds.indexOf(missionRole.profileType.id) > -1;
    if (!valid) {
      this.setState({
        showProfileTypeError: true
      });
      return false;
    }
    return true;
  }

  _validateStaffAssignmentDuration() {
    return true;
  }

  handleValidSubmit(values) {
    const { missionRole, staff } = values;
    var valid = this._validateProfileType(missionRole, staff);
    if (valid) {
      valid = this._validateStaffAssignmentDuration();
      if (valid) {
        /* empty */
      }
    }
  }

  renderProfileTypeErrorModal() {
    if (this.state.showProfileTypeError) {
      return (
        <Modal
         bsSize="small"
         show={this.state.showProfileTypeError}
         onHide={() => {}}
         backdrop={false}>
          <Modal.Header closeButton>
            <Modal.Title>Profile Type Conflict</Modal.Title>
          </Modal.Header>
          <Modal.Body bsStyle="danger">
            This mission role requires the profile type &nbsp;
            <b>{this.state.staffAssignment.get('missionRole').profileType.profileType}</b>
            &nbsp; the selected staff member does not have the required
            profile type. Would you still like to assign the staff member
            to the mission role?
          </Modal.Body>
          <Modal.Footer>
            <Button>No</Button>
            <Button bsStyle='primary'>Yes</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

  render() {
    return (
      <div>
        <ValidatedForm
          onValidSubmit={this.handleValidSubmit}>
          <ValidatedDropdownList
          name="missionRole"
          label="Mission Role"
          validate="required"
          errorHelp="Mission role is required"
          data={this.props.missionRoles}
          value={this.state.staffAssignment.get('missionRole')}
          textField={(mr) => { return mr.profileType.profileType; }}
          placeholder="Mission Role"
          filter="contains"
          onChange={this.handleMissionRoleChange}
          />
          <ValidatedDropdownList
          name="staff"
          label="Staff"
          validate="required"
          errorHelp="Staff is required"
          data={this.props.staffList}
          textField="fullName"
          value={this.state.staffAssignment.get('staff')}
          placeholder="Staff"
          filter="contains"
          onChange={this.handleStaffChange}
          />
          <ValidatedDropdownList
          name="confirmedType"
          label="Confirmed Type"
          validate="required"
          errorHelp="Confirmed type is required, select `Not Confirmed` if unsure"
          data={this.props.confirmedTypes}
          textField="confirmedType"
          value={this.state.staffAssignment.get('confirmedType')}
          placeholder="ConfirmedType"
          filter="contains"
          onChange={this.handleConfirmedTypeChange}
          />
          <ValidatedDateTimePicker
          name="startDate"
          label="Start Date"
          validate="required"
          errorHelp="A valid start date is required"
          time={false}
          value={DateUtils.parseDate(
                 this.state.staffAssignment.get('startDate'))}
          format="MMM dd, yyyy"
          onChange={this.handleStartDateChange}
          />
          <ValidatedDateTimePicker
          name="endDate"
          label="End Date"
          time={false}
          validate="isDate"
          errorHelp="A valid end date is required"
          value={DateUtils.parseDate(
                 this.state.staffAssignment.get('endDate'))}
          format="MMM dd, yyyy"
          onChange={this.handleEndDateChange}
          />
          <Input
        type="text"
        value={this.state.staffAssignment.get('location')}
        placeholder="Location"
        label="Location"
        onChange={this.handleLocationChange}
        hasFeedback
          />
          <Input
           type="text"
           value={this.state.staffAssignment.get('comments')}
           placeholder="Comments"
           label="Comments"
           onChange={this.handleCommentsChange}
           hasFeedback
          />
          <hr/>
          <div className="pull-right">
            <Button onClick={this.props.onClose}>Close</Button>
            <Button
           bsStyle="primary"
           type="submit">
              Save changes
            </Button>
          </div>
          <div className="clearfix"/>
        </ValidatedForm>
        {this.renderProfileTypeErrorModal()}
      </div>
    );
  }
}

StaffAssignmentForm.propTypes = {
  staffAssignment: React.PropTypes.object,
  missionRole: React.PropTypes.object,
  staffList: React.PropTypes.array,
  missionRoles: React.PropTypes.array,
  confirmedTypes: React.PropTypes.array,
  profileTypes: React.PropTypes.array,
  onClose: React.PropTypes.func
};
