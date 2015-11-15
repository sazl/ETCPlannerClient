import React from 'react/addons';

import Immutable from 'immutable';

import connectToStores from 'alt/utils/connectToStores';

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

import StaffAssignmentActions from 'actions/StaffAssignmentActions';
import StaffAssignmentsStore from 'stores/StaffAssignmentsStore';

import BaseComponent from 'components/BaseComponent';

import ErrorModalController from 'components/forms/staff-assignment/ErrorModalController';
import ProfileTypeErrorModal from 'components/forms/staff-assignment/ProfileTypeErrorModal';

import ValidatedForm from 'components/inputs/ValidatedForm';
import ValidatedDropdownList from 'components/inputs/ValidatedDropdownList';
import ValidatedDateTimePicker from 'components/inputs/ValidatedDateTimePicker';


import Utils from 'utils/utils';
import DateUtils from 'utils/date';

@connectToStores
export default class StaffAssignmentForm extends BaseComponent {

  static getStores() {
    return [StaffAssignmentsStore];
  }

  static getPropsFromStores() {
    return StaffAssignmentsStore.getState();
  }

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
      'handleProfileTypeErrorClose',
      'handleProfileTypeErrorAccept',
      'handleProfileTypeError',
      'handleStaffDurationErrorClose',
      'handleStaffDurationErrorAccept',
      'handleStaffDurationError'
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
      showProfileTypeError: true,
      profileTypeError: false,
      showStaffDurationError: true,
      staffDurationError: false
    };
  }

  componentWillMount() {
    if (this.state.staffAssignment.staff) {
      this.fetchStaffAssignmentsForDurationError();
    }
  }

  fetchStaffAssignmentsForDurationError() {
    const staffAssignment = this.state.staffAssignment;
    StaffAssignmentActions.fetchStaffAssignmentsByStaffIndex({
      'staff_index': staffAssignment.get('staff').index,
      'start_date_lte': DateUtils.formatISO(staffAssignment.get('endDate')),
      'end_date_gte': DateUtils.formatISO(staffAssignment.get('startDate')),
      'exclude_id': staffAssignment.get('id')
    });
  }

  _fetchAndClearStaffDurationError() {
    this.fetchStaffAssignmentsForDurationError();
    this.setState({
      showStaffDurationError: true,
      staffDurationError: false
    });
  }

  _fetchAndClearProfileTypeError() {
    this.setState({
      showStaffDurationError: true,
      staffDurationError: false
    });
  }

  _fetchAndClearBoth() {
    this.fetchStaffAssignmentsForDurationError();
    this.setState({
      showProfileTypeError: true,
      profileTypeError: false,
      showStaffDurationError: true,
      staffDurationError: false
    });
  }

  handleMissionRoleChange(missionRole) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'missionRole',
        missionRole
      )
    }, this._fetchAndClearProfileTypeError);
  }

  handleStaffChange(staff) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'staff',
        staff
      )
    }, this._fetchAndClearBoth);
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
    }, this._fetchAndClearStaffDurationError);
  }

  handleEndDateChange(endDate) {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'endDate',
        endDate
      )
    }, this._fetchAndClearStaffDurationError);
  }

  handleLocationChange() {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'location',
        this.refs.location.getValue()
      )
    });
  }

  handleCommentsChange() {
    this.setState({
      staffAssignment: this.state.staffAssignment.set(
        'comments',
        this.refs.comments.getValue()
      )
    });
  }

  _saveStaffAssignment() {
    if (this.state.profileTypeError || this.state.staffDurationError) {
      this.setState({
        showProfileTypeError: this.state.profileTypeError,
        showStaffDurationError: this.state.staffDurationError
      });
    } else {
      StaffAssignmentActions.saveStaffAssignment(
        this.state.staffAssignment.toJS());
      if (this.props.onSave) {
        this.props.onSave();
      }
    }
  }

  handleValidSubmit(values) {
    this._saveStaffAssignment();
  }

  handleProfileTypeError() {
    this.setState({
      showProfileTypeError: true,
      profileTypeError: true
    });
  }

  handleProfileTypeErrorClose() {
    this.setState({
      showProfileTypeError: false,
      profileTypeError: true
    });
  }

  handleProfileTypeErrorAccept() {
    this.setState({
      showProfileTypeError: false,
      profileTypeError: false
    });
  }

  handleStaffDurationError() {
    if (!this.state.showStaffDurationError && !this.state.staffDurationError) {
      this.setState({
        showStaffDurationError: true,
        staffDurationError: true
      });
    }
  }

  handleStaffDurationErrorClose() {
    this.setState({
      showStaffDurationError: false,
      staffDurationError: true
    });
  }

  handleStaffDurationErrorAccept() {
    this.setState({
      showStaffDurationError: false,
      staffDurationError: false
    });
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
           ref="location"
           onChange={this.handleLocationChange}
           hasFeedback
          />
          <Input
           type="text"
           value={this.state.staffAssignment.get('comments')}
           placeholder="Comments"
           label="Comments"
           ref="comments"
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

        <ProfileTypeErrorModal
         onCancel={this.handleProfileTypeErrorClose}
         onAccept={this.handleProfileTypeErrorAccept}
         onError={this.handleProfileTypeError}
         staffAssignment={this.state.staffAssignment}
         show={this.state.showProfileTypeError}
        />


        {this.state.showStaffDurationError
        ?
        <ErrorModalController
         onCancel={this.handleStaffDurationErrorClose}
         onAccept={this.handleStaffDurationErrorAccept}
         onError={this.handleStaffDurationError}
         staffAssignment={this.state.staffAssignment}
         staffAssignmentsByStaffIndex={this.props.staffAssignmentsByStaffIndex}
         show={this.state.showStaffDurationError}
        />
        :
        null}
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
  onClose: React.PropTypes.func,
  onSave: React.PropTypes.func
};
