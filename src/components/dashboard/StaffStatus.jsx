import React from 'react/addons';
import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import Griddle from 'griddle-react';
import { Table, Tr, Td }from 'reactable';

import StatusCard from 'components/dashboard/StatusCard';

import 'styles/Griddle.scss';

export default class StaffStatus extends React.Component {
  componenDidMount() {
    var table = this.refs.testTable;
    console.log(table);
    table.dataTable({

    });
  }

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
            <Table className="table table-bordered table-striped table-hover"
                   columns={[{key: 'firstName', label: 'First Name'}]}
                   data={this.props.staffList}
                   sortable={true}
                   filterable={['firstName']}
                   filterPlaceholder="Search"
                   itemsPerPage={4}/>

            <Table className="table" sortable="true">
              <Tr>
                <Td column="Test" data="TEst">
                  <b>TEst</b>
                </Td>
              </Tr>
              <Tr>
                <Td column="Test" data="xEst">
                  <b>xEst</b>
                </Td>
              </Tr>
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
