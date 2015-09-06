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
    console.log(this.props);
    let availableStaffCount = this.props.availableStaff.length,
        breakInServiceStaffCount = this.props.breakInServiceStaffAssignments.length,
        notAvailableStaffCount = this.props.notAvailableStaffAssignments.length,
        totalStaffCount = availableStaffCount + notAvailableStaffCount + breakInServiceStaffCount,
        availablePercentage = (availableStaffCount / totalStaffCount) * 100,
        breakInServicePercentage = (breakInServiceStaffCount / totalStaffCount) * 100,
        notAvailablePercentage = (notAvailableStaffCount / totalStaffCount) * 100;

    var config = {
      credits: false,
      title: {
        text: 'Deployment Types'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        name: 'Number of Deployments',
        animation: false,
        data: [10, 11, 7, 8, 6, 7, 8, 9, 6, 12, 11, 10]
      }, {
        name: 'Confirmed',
        animation: false,
        data: [5, 3, 5, 4, 5, 6, 5, 3, 5, 8, 7, 6]
      }]
    };

    var config2 = {
      credits: false,
      title: {
        text: 'Deployments'
      },
      chart: {
        polar: true
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
        name: 'Total',
        animation: false,
        data: [10, 11, 7, 8, 6, 7, 8, 9, 6, 12, 11, 10]
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
          name: 'Break In Service',
          y: breakInServicePercentage
        }, {
          name: 'Not Available',
          y: notAvailablePercentage
        }, {
          name: 'Available',
          y: availablePercentage
        }]
      }]
    };


    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard
           heading={breakInServiceStaffCount.toString()}
           subheading="Break In Service"
           bsStyle="info"
           link="break-in-service"
          />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard
           heading={availableStaffCount.toString()}
           subheading="Available"
           bsStyle="success"
           link="available"
          />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard
           heading={notAvailableStaffCount.toString()}
           subheading="Not Available"
           bsStyle="danger"
           link="not-available"
          />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
          <Panel header="Deployments">
            <Highcharts config={config}></Highcharts>
          </Panel>
          </Col>
          <Col xs={12} md={4}>
          <Panel header="Deployments">
            <Highcharts config={config2}/>
          </Panel>
          </Col>
          <Col xs={12} md={4}>
          <Panel header="Staff Availability">
            <Highcharts config={donut}></Highcharts>
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

DashboardView.propTypes = {
  availableStaff: React.PropTypes.array.isRequired,
  breakInServiceStaffAssignments: React.PropTypes.array.isRequired,
  notAvailableStaffAssignments: React.PropTypes.array.isRequired
};
