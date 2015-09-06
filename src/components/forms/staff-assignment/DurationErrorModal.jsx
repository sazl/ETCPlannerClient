import React from 'react/addons';

import Immutable from 'immutable';

import {
  Input,
  Button,
  Modal
} from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';

import StaffAssignmentList from 'components/forms/list/StaffAssignmentList';

import Utils from 'utils/utils';
import DateUtils from 'utils/date';


export default class DurationErrorModal extends BaseComponent {

  componentWillReceiveProps(props) {
    if (this.props.error) {
      this.props.onError();
    }
  }

  render() {
    const startDate = DateUtils.formatReadable(this.props.staffAssignment.get('startDate'));
    const endDate = DateUtils.formatReadable(this.props.staffAssignment.get('endDate'));
    const staffAssignments = this.props.staffAssignments;
    const showError = this.props.error;

    return (
      <Modal
         bsSize="medium"
         show={showError && this.props.show}
         onHide={this.props.onCancel}
         backdrop={false}>
        <Modal.Header closeButton>
          <Modal.Title>Staff Duration Conflict</Modal.Title>
        </Modal.Header>
        <Modal.Body className="alert alert-danger">
          <div>
            <p>
              This staff member is currently unavailable during the time
              period between:
            </p>
            <p className="text-center">
              <b>{startDate}</b> to <b>{endDate}</b>
            </p>
            <p>
              because they are currently assigned to another task during this period. Would
              you still like to assign the staff member during this period
              of time?
            </p>
            <p>
              <StaffAssignmentList
                 staffAssignments={staffAssignments}
              />
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
             bsStyle="danger"
             onClick={this.props.onCancel}>No</Button>
          <Button bsStyle="success" onClick={this.props.onAccept}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

DurationErrorModal.propTypes = {
  show: React.PropTypes.bool,
  onError: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onAccept: React.PropTypes.func,
  staffAssignment: React.PropTypes.object,
  staffAssignments: React.PropTypes.array
};
