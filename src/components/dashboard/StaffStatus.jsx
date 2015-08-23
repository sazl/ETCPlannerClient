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

import 'styles/Griddle.scss';


export default class StaffStatus extends BaseComponent {
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
            <Griddle tableClassName="table table-bordered table-striped"
                     showFilter={true}
                     showSettings={true}
                     results={this.props.staffList}
                     columns={['index', 'firstName']}/>
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
