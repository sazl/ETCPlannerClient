import React from 'react/addons';

import Immutable from 'immutable';

import {
  Input,
  Button,
  ButtonInput,
  Modal
} from 'react-bootstrap';

import { Form, ValidatedInput } from 'react-bootstrap-validation';

import { DropdownList, Multiselect } from 'react-widgets';

import MissionActions from 'actions/MissionActions';

import BaseComponent from 'components/BaseComponent';
import ValidatedForm from 'components/inputs/ValidatedForm';
import ValidatedDropdownList from 'components/inputs/ValidatedDropdownList';
import ValidatedMultiselect from 'components/inputs/ValidatedMultiselect';


export default class MissionForm extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      mission: Immutable.Map(this.props.mission || {
        description: null,
        etcServiceMap: null,
        missionType: null,
        confirmedType: null,
        countries: []
      })
    };

    this._bind(
      'handleDescriptionChange',
      'handleEtcServiceMapChange',
      'handleConfirmedTypeChange',
      'handleMissionTypeChange',
      'handleCountriesChange',
      'onSave',
      'onValidSubmit',
      'onInvalidSubmit'
    );
  }

  handleDescriptionChange() {
    this.setState({
      mission: this.state.mission.set(
        'description',
        this.refs.description.getValue()
      )
    });
  }

  handleEtcServiceMapChange() {
    this.setState({
      mission: this.state.mission.set(
        'etcServiceMap',
        this.refs.etcServiceMap.getValue()
      )
    });
  }

  handleConfirmedTypeChange(confirmedType) {
    this.setState({
      mission: this.state.mission.set(
        'confirmedType',
        confirmedType
      )
    });
  }

  handleMissionTypeChange(missionType) {
    this.setState({
      mission: this.state.mission.set(
        'missionType',
        missionType
      )
    });
  }

  handleCountriesChange(countries) {
    this.setState({
      mission: this.state.mission.set(
        'countries',
        countries
      )
    });
  }

  onSave() {
    MissionActions.saveOrUpdateMission(this.state.mission);
    this.props.onSave();
  }

  onValidSubmit(values) {
    console.log(values);
  }

  onInvalidSubmit(errors, values) {
    console.log(errors);
    console.log(values);
  }

  render() {
    return (
      <div className="modal-container">
        <ValidatedForm
         onValidSubmit={this.onValidSubmit}
         onInvalidsubmit={this.onInvalidSubmit}>
          <ValidatedInput
          type="text"
          placeholder="Description"
          name="description"
          label="Description"
          ref="description"
          value={this.state.mission.get('description')}
          validate="required"
          errorHelp="Description is required"
          onChange={this.handleDescriptionChange}
          hasFeedback
          />
          <ValidatedInput
          name="etcServiceMap"
          errorHelp="Must be a valid URL"
          type="text"
          placeholder="ETC Service Map"
          label="ETC Service Map"
          ref="etcServiceMap"
          value={this.state.mission.get('etcServiceMap')}
          onChange={this.handleEtcServiceMapChange}
          hasFeedback
          />
          <ValidatedDropdownList
           name="confirmedType"
           label="Confirmed Type"
           placeholder="Confirmed Type"
           errorHelp="Confirmed Type is required"
           validate="required"
           value={this.state.mission.get('confirmedType')}
           data={this.props.confirmedTypes}
           valueField="id"
           textField="confirmedType"
           filter="contains"
           onChange={this.handleConfirmedTypeChange}
          />
          <ValidatedDropdownList
           name="missionType"
           label="Mission Type"
           placeholder="Mission Type"
           errorHelp="Mission Type is required"
           validate="required"
           value={this.state.mission.get('missionType')}
           data={this.props.missionTypes}
           valueField="id"
           textField="missionType"
           filter="contains"
           onChange={this.handleMissionTypeChange}
          />
          <ValidatedMultiselect
           name="countries"
           placeholder="Country"
           label="Countries"
           errorHelp="A country is required"
           validate="required"
           value={this.state.mission.get('countries')}
           data={this.props.countries}
           textField="fullName"
           valueField="id"
           filter="contains"
           onChange={this.handleCountriesChange}
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
      </div>
    );
  }
}

MissionForm.propTypes = {
  mission: React.PropTypes.object,
  onClose: React.PropTypes.func,
  onSave: React.PropTypes.func,
  confirmedTypes: React.PropTypes.array,
  missionTypes: React.PropTypes.array,
  countries: React.PropTypes.array
};
