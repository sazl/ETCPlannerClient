import React from 'react/addons';
import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import Griddle from 'griddle-react';
import { Table, Tr, Td } from 'reactable';

import StatusCard from 'components/dashboard/StatusCard';

import 'styles/Griddle.scss';

export default class StaffStatus extends React.Component {
  render() {
    var statusCount = this.props.staffList.length.toString();

    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard heading={statusCount}
                      subheading={this.props.heading}
                      bsStyle={this.props.bsStyle} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <Panel>
            <Table className="table table-bordered table-striped" filterable={['Index']} sortable={['Index']} itemsPerPage={5}>
              {this.props.staffList.map((staff) => {
                return (
                  <Tr>
                  <Td column="Index" data={staff.index}>
                  {staff.index}
                  </Td>
                  </Tr>
                );
               })}
            </Table>
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
