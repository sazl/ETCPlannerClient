'use strict';

import React from 'react/addons';
import Router from 'react-router';
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

var RouteHandler = Router.RouteHandler;

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

let staffAvailable = [

];

let staffNotAvailable = [

];

export default class StaffCard {
  render() {
    return (
      <div className="media" style={{marginLeft: 20}}>
        <div className="media-left media-middle">
          <a href="#">
            <img className="media-object" width="40" height="40" src="" alt=""/>
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">
            {this.props.data.firstName}
            {this.props.data.lastName}
          </h4>
          {this.props.data.title}
          <div>
            <div className="label label-success">
              {this.props.data.staffRole.startDate}
            </div>
            <span style={{marginLeft: 5, marginRight: 5}}>to</span>
            <div className="label label-warning">
              {this.props.data.staffRole.endDate}
            </div>
          </div>
        </div>
        <hr style={{marginBottom: 0}}></hr>
      </div>
    );
  }
}

StaffCard.propTypes = {
  data: React.PropTypes.object
};

export default class Dashboard extends React.Component {
  render() {
    var config = {
      credits: false,
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
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
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
    };
    var donut = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
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
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }]
      }]
    };
    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <StatusCard heading="5"
                      subheading="Break In Service"
                      bsStyle="info"
                      link="break-in-service" />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard heading="12"
                      subheading="Available"
                      bsStyle="success"
                      link="dashboard" />
          </Col>
          <Col xs={12} md={4}>
          <StatusCard heading="3"
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
