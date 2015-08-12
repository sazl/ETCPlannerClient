import React from 'react/addons';
import {
  Row,
  Col,
  Panel
} from 'react-bootstrap';

import Griddle from 'griddle-react';
import { Table }from 'reactable';

import StatusCard from 'components/dashboard/StatusCard';

let staffBIS = [{
  firstName: 'Ekue Ayih',
  title: 'Snr. Specialist',
  staffRole: {
    startDate: '2014/05/12',
    endDate: '2014/06/24'
  }
}, {
  firstName: 'Rob Buurveld',
  title: 'Team Leader',
  staffRole: {
    startDate: '2015/02/09',
    endDate: '2015/04/16'
  }
}];

import 'styles/Griddle.scss';

export default class StaffBreakInService extends React.Component {
  render() {
    console.log(Table);
    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard heading="5" subheading="Break In Service" bsStyle="info" link="break-in-service"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
          <Panel>
            <Table className="table table-bordered table-striped table-hover"
                   columns={[{key: 'firstName', label: 'First Name'}]}
                   data={staffBIS}
                   sortable={true}
                   filterable={['firstName']}
                   filterPlaceholder="Search"
                   itemsPerPage={4}/>
            <Griddle className="table" showFilter={true}
                     showSettings={true}
                     results={staffBIS} />
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
