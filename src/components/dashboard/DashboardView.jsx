'use strict';
import React from 'react/addons';
import Highcharts from 'react-highcharts/more';
import {
  Row,
  Col,
  Grid,
  Panel,
  Glyphicon,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import StatusCard from 'components/dashboard/StatusCard';

export default class DashboardView extends React.Component {

  render() {
    let availableStaffCount = this.props.availableStaff.length.toString(),
        notAvailableStaffCount = this.props.notAvailableStaff.length.toString(),
        totalStaffCount = availableStaffCount + notAvailableStaffCount,
        availablePercentage = (availableStaffCount / totalStaffCount) * 100,
        notAvailablePercentage = (notAvailableStaffCount / totalStaffCount) * 100;

    var config = {
      credits: false,
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        animation: false,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };

    var config2 = {
      credits: false,
      chart: {
        polar: true
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        animation: false,
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    var donut = {
      credits: false,
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Staff Availability'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        animation: false,
        name: 'Availability',
        colorByPoint: true,
        data: [{
          name: 'Available',
          y: availablePercentage
        }, {
          name: 'Not Available',
          y: notAvailablePercentage
        }]
      }]
    };


    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard heading={notAvailableStaffCount}
                      subheading="Break In Service"
                      bsStyle="info"
                      link="break-in-service" />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard heading={availableStaffCount}
                      subheading="Available"
                      bsStyle="success"
                      link="available" />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard heading="5"
                      subheading="Not Available"
                      bsStyle="danger"
                      link="dashboard"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <Panel header="Test">
            <Highcharts config={config}></Highcharts>
          </Panel>
          </Col>
          <Col xs={12} md={4}>
          <Panel header="Test">
            <Highcharts config={config2}/>
          </Panel>
          </Col>
          <Col xs={12} md={4}>
          <Panel header="Test">
            <Highcharts config={donut}></Highcharts>
          </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <Panel header="Not Available" bsStyle="danger">
            <ListGroup fill>
              <ListGroupItem>
                <span><Glyphicon glyph="comment"/> New Comment</span>
                <span className="pull-right text-muted small"><em>New Comment</em></span>
              </ListGroupItem>
              <ListGroupItem>
                <span><Glyphicon glyph="comment"/> New Comment</span>
                <span className="pull-right text-muted small"><em>New Comment</em></span>
              </ListGroupItem>
            </ListGroup>
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

DashboardView.propTypes = {
  availableStaff: React.PropTypes.array.isRequired
};
