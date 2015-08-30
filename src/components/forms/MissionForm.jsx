import React from 'react/addons';
import {
  Input,
  Button,
  ButtonInput
} from 'react-bootstrap';

import { DropdownList, Multiselect } from 'react-widgets';


export default class MissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: this.props.mission || {}
    };
  }

  render() {
    return (
      <form>
        <Input type="text" placeholder="Description" label="Description" />
        <Input type="text" placeholder="ETC Service Map" label="ETC Service Map" />
        <div className="form-group">
          <label>Confirmed Type</label>
          <DropdownList placeholder="Confirmed Type"
                        data={this.props.confirmedTypes}
                        textField="confirmedType"
                        filter="contains" />
        </div>
        <div className="form-group">
          <label>Mission Type</label>
          <DropdownList placeholder="Mission Type"
                        data={this.props.missionTypes}
                        textField="missionType"
                        filter="contains" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <Multiselect placeholder="Country"/>
        </div>
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

MissionForm.propTypes = {
  mission: React.PropTypes.object,
  onClose: React.PropTypes.func,
  confirmedTypes: React.PropTypes.array,
  missionTypes: React.PropTypes.array
};
