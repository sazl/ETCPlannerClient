import React from 'react/addons';

import Immutable from 'immutable';

import { Input, Button } from 'react-bootstrap';

import { ValidatedInput } from 'react-bootstrap-validation';

import ValidatedForm from 'components/inputs/ValidatedForm';
import ValidatedDropdownList from 'components/inputs/ValidatedDropdownList';
import ValidatedDateTimePicker from 'components/inputs/ValidatedDateTimePicker';

import {
  DateTimePicker,
  DropdownList,
  Multiselect
} from 'react-widgets';

import BaseComponent from 'components/BaseComponent';

import DateUtils from 'utils/date';
import KeyUtils from 'utils/keys';


export default class MissionRoleForm extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind(
      'handleMissionChange',
      'handleProfileTypeChange',
      'handleLocationChange',
      'handleStartDateChange',
      'handleEndDateChange'
    );
    this.state = {
      missionRole: Immutable.Map(props.missionRole || {
        startDate: null,
        endDate: null,
        location: null,
        mission: props.mission,
        profileType: null
      })
    };
  }

  handleMissionChange(mission) {
    this.setState({
      missionRole: this.state.missionRole.set(
        'mission',
        mission
      )
    });
  }

  handleProfileTypeChange(profileType) {
    console.log('CHANGE', profileType);
    this.setState({
      missionRole: this.state.missionRole.set(
        'profileType',
        profileType
      )
    });
  }

  handleLocationChange(location) {
    this.setState({
      missionRole: this.state.missionRole.set(
        'location',
        location
      )
    });
  }

  handleStartDateChange(startDate) {
    this.setState({
      missionRole: this.state.missionRole.set(
        'startDate',
        startDate
      )
    });
  }

  handleEndDateChange(endDate) {
    this.setState({
      missionRole: this.state.missionRole.set(
        'endDate',
        endDate
      )
    });
  }

  render() {
    return (
      <ValidatedForm>
        <ValidatedDropdownList
         name="missions"
         label="Mission"
         validate="required"
         errorHelp="Mission is required"
         data={this.props.missions}
         value={this.state.missionRole.get('mission')}
         valueField="id"
         textField="description"
         placeholder="Mission"
         filter="contains"
         validationEvent="onBlur"
         onChange={this.handleMissionChange}
        />
        <ValidatedDropdownList
         name="profileTypes"
         label="Profile Type"
         validate="required"
         errorHelp="Profile type is required"
         data={this.props.profileTypes}
         value={this.state.missionRole.get('profileType')}
         textField="profileType"
         valueField="id"
         placeholder="Profile Type"
         filter="contains"
         validationEvent="onBlur"
         onChange={this.handleProfileTypeChange}
        />
        <ValidatedInput
         name="location"
         validate="required"
         errorHelp="Location is required"
         type="text"
         value={this.state.missionRole.get('location')}
         placeholder="Location"
         label="Location"
         hasFeedback
        />
        <ValidatedDateTimePicker
         name="startDate"
         validate="isDate"
         errorHelp="Start date is required"
         label="Start Date"
         time={false}
         value={this.state.missionRole.get('startDate')}
         format="MMM dd, yyyy"
         validationEvent="onBlur"
         onChange={this.handleStartDateChange}
        />
        <ValidatedDateTimePicker
         name="endDate"
         validate="isDate"
         errorHelp="End date is required"
         label="End Date"
         time={false}
         value={this.state.missionRole.get('endDate')}
         format="MMM dd, yyyy"
         validationEvent="onBlur"
         onChange={this.handleEndDateChange}
        />
        <hr/>
        <div className="pull-right">
          <Button onClick={this.props.onClose}>Close</Button>
          <Button
           type="submit"
           bsStyle="primary">
            Save changes
          </Button>
        </div>
        <div className="clearfix"/>
      </ValidatedForm>
    );
  }
}

MissionRoleForm.propTypes = {
  missionRole: React.PropTypes.object,
  mission: React.PropTypes.object,
  missions: React.PropTypes.array,
  profileTypes: React.PropTypes.array,
  onClose: React.PropTypes.func
};
