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

import Utils from 'utils/utils';
import DateUtils from 'utils/date';

import 'styles/Griddle.scss';


class BasicList extends React.Component {
  render() {
    return (
      <ul className="list list-unstyled">
        {this.props.data.map((item) => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
    );
  }
}

export default class StaffStatus extends BaseComponent {
  render() {
    const statusCount = this.props.staffList.length.toString();
    const columns = ['firstName', 'lastName', 'profileTypes', 'title'];

    const staffList = this.props.staffList.map((staff) => {
      staff.profileTypes = Utils.getField({
        data: staff.profileTypes,
        field: 'profileType',
        many: true
      });
      return staff;
    });

    const columnMetadata = [{
      columnName: 'firstName',
      displayName: 'First Name'
    }, {
      columnName: 'lastName',
      displayName: 'Last Name'
    }, {
      columnName: 'profileTypes',
      displayName: 'Profile Type',
      customComponent: BasicList
    }, {
      columnName: 'title',
      displayName: 'Title'
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
             results={staffList}
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
  staffList: React.PropTypes.array.isRequired
};
