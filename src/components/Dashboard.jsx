'use strict';

import React from 'react/addons';
import Router from 'react-router';

import {
  Row,
  Col,
  Grid,
  Panel,
  Glyphicon,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import Griddle from 'griddle-react';

// CSS
import '../styles/Griddle.scss';

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
    return (
      <div>
        <Row>
          <Col xs={12} md={4}>
          <Panel header="Break In Service" bsStyle="warning">
            <Griddle results={staffBIS}
                     showFilter={true}
                     useCustomRowComponent={true}
                     columns={['Staff']}
                     customRowComponent={StaffCard} />
          </Panel>
        </Col>
        <Col xs={12} md={4}>
        <Panel header={<div className="row">
                       <div className="col-xs-3">
                       <Glyphicon className="huge" glyph="comment" bsSize="large"/>
                       </div>
                       <div className="col-xs-9 text-right">
                       <div className="huge">26</div>
                       <div>New Comments!</div>
                       </div>
                       </div>}
               bsStyle="primary"
               onClick={() => { console.log('hello'); }}>

          <span className="pull-left">View Details</span>
          <span className="pull-right">
            <Glyphicon glyph="comment"></Glyphicon>
          </span>
        </Panel>
          </Col>
          <Col xs={12} md={4}>
          <Panel header={<div className="row">
                         <div className="col-xs-3">
                         <Glyphicon className="titanic" glyph="comment" bsSize="large"/>
                         </div>
                         <div className="col-xs-9 text-right">
                         <div className="huge">26</div>
                         <div>New Comments!</div>
                         </div>
                         </div>}
                 bsStyle="danger"
                 onClick={() => { console.log('hello'); }}>

            <span className="pull-left">View Details</span>
            <span className="pull-right">
              <Glyphicon glyph="comment"></Glyphicon>
            </span>
          </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
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
          <Col xs={12} md={4}>

          </Col>
        </Row>
      </div>
    );
  }
}
