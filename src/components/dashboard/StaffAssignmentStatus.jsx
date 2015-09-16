import React from 'react/addons';
import {
  Row,
  Col,
  Button,
  Glyphicon,
  Panel
} from 'react-bootstrap';

import Griddle from 'griddle-react';
import { Table, Tr, Td } from 'reactable';

import BaseComponent from 'components/BaseComponent';
import StatusCard from 'components/dashboard/StatusCard';

import DateUtils from 'utils/date';

import 'styles/Griddle.scss';


export default class StaffStatus extends BaseComponent {
  render() {
    const statusCount = this.props.staffAssignments.length.toString();
    const columns = ['firstName', 'lastName', 'mission', 'profileType',
                     'startDate', 'endDate', 'comments'];

    const staffAssignments = this.props.staffAssignments.map((staff) => {
      staff.firstName = staff.staff.firstName;
      staff.lastName = staff.staff.lastName;
      staff.startDate = DateUtils.formatDate(staff.startDate);
      staff.endDate = DateUtils.formatDate(staff.endDate);
      staff.profileType = staff.missionRole.profileType.profileType;
      staff.mission = staff.missionRole.mission.description;
      return staff;
    });

    const columnMetadata = [{
      columnName: 'firstName',
      displayName: 'First Name'
    }, {
      columnName: 'lastName',
      displayName: 'Last Name'
    }, {
      columnName: 'mission',
      displayName: 'Mission'
    }, {
      columnName: 'startDate',
      displayName: 'Start Date'
    }, {
      columnName: 'endDate',
      displayName: 'End Date'
    }, {
      columnName: 'profileType',
      displayName: 'Profile Type'
    }, {
      columnName: 'comments',
      displayName: 'Comments'
    }];

    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard
           heading={statusCount}
           subheading={this.props.heading}
           bsStyle={this.props.bsStyle}
          />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <Panel>
            <Griddle
             tableClassName="table table-bordered table-striped"
             showFilter={true}
             showSettings={true}
             results={staffAssignments}
             columns={columns}
             columnMetadata={columnMetadata}
            />
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

StaffStatus.propTypes = {
  heading: React.PropTypes.string.isRequired,
  bsStyle: React.PropTypes.string.isRequired,
  staffAssignments: React.PropTypes.array.isRequired
};
