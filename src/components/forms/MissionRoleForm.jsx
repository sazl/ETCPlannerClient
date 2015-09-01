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

import BaseComponent from 'components/BaseComponent';

import DateUtils from 'utils/date';


export default class MissionRoleForm extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind(
      'handleMissionChange'
    );
    this.state = {
      missionRole: Immutable.Map(this.props.missionRole || {
        startDate: null,
        endDate: null,
        location: null,
        mission: null,
        profileType: null
      })
    };
  }

  handleMissionChange(mission) {
    console.log(mission);
    this.setState({
      missionRole: this.state.missionRole.set(
        'mission',
        mission
      )
    });
  }

  handleProfileTypeChange(profileType) {

  }

  handleLocationChange(location) {

  }

  handleStartDateChange(startDate) {

  }

  handleEndDateChange(endDate) {

  }

  render() {
    return (
      <form>
        <Input label="Mission">
          <DropdownList
          data={this.props.missions}
          value={this.state.missionRole.get('mission')}
          valueField="id"
          textField="description"
          placeholder="Mission"
          filter="contains"
          onChange={this.handleMissionChange}
          />
        </Input>
        <Input label="Profile Type">
          <DropdownList
          data={this.props.profileTypes}
          value={this.state.missionRole.get('profileType')}
          textField="profileType"
          valueField="id"
          placeholder="Profile Type"
          filter="contains" />
        </Input>
        <Input
         type="text"
         value={this.state.missionRole.get('location')}
         placeholder="Location"
         label="Location"
         hasFeedback
        />
        <Input label="Start Date">
          <DateTimePicker
          time={false}
          value={DateUtils.parseDate(this.state.missionRole.get('startDate'))}
          format="MMM dd, yyyy"
          />
        </Input>

        <Input label="End Date">
          <DateTimePicker
          time={false}
          format="MMM dd, yyyy"
          value={DateUtils.parseDate(this.state.missionRole.get('endDate'))}/>
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
  missions: React.PropTypes.array,
  profileTypes: React.PropTypes.array,
  onClose: React.PropTypes.func
};
