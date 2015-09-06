import React from 'react/addons';

import connectToStores from 'alt/utils/connectToStores';

import Immutable from 'immutable';

import StaffAssignmentsStore from 'stores/StaffAssignmentsStore';
import StaffAssignmentActions from 'actions/StaffAssignmentActions';

import {
  Input,
  Button,
  Modal
} from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';

import StaffAssignmentList from 'components/forms/list/StaffAssignmentList';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

export default class ProfileTypeErrorModal extends BaseComponent {

  _checkValidProfileType() {
    const staffAssignment = this.props.staffAssignment;
    if (!staffAssignment.get('staff')) {
      return true;
    }
    const profileTypeIds = Utils.getField({
      data: staffAssignment.get('staff').profileTypes
    });
    const valid = profileTypeIds.indexOf(
      staffAssignment.get('missionRole').profileType.id) > -1;
    return valid;
  }

  render() {
    const showError = !this._checkValidProfileType();
    const staffAssignment = this.props.staffAssignment;

    return (
      <Modal
         bsSize="small"
         show={showError && this.props.show}
         onHide={this.props.onCancel}
         backdrop={false}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Type Conflict</Modal.Title>
        </Modal.Header>
        <Modal.Body className="alert alert-danger">
          <div>
            This mission role requires the profile type &nbsp;
            <b>{staffAssignment.get('missionRole').profileType.profileType}</b>
            &nbsp; the selected staff member does not have the required
            profile type. Would you still like to assign the staff member
            to the mission role?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>No</Button>
          <Button bsStyle='danger' onClick={this.props.onAccept}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


ProfileTypeErrorModal.propTypes = {
  show: React.PropTypes.bool,
  onError: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onAccept: React.PropTypes.func,
  staffAssignment: React.PropTypes.object
};
