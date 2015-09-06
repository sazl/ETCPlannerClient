import React from 'react/addons';

import BaseComponent from 'components/BaseComponent';

import MultiselectPanel from 'components/planning/MultiselectPanel';

import {
  Affix,
  Input,
  Row,
  Col,
  Panel,
  PanelGroup
} from 'react-bootstrap';

export default class RequirementView extends BaseComponent {

  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
          <PanelGroup>
            <MultiselectPanel
             header="Staff"
             placeholder="Staff"
             value={this.props.staffListSelected.toArray()}
             data={this.props.staffList}
             textField="fullName"
             busy={this.props.staffList.length === 0}
             filter="contains"
             onChange={this.props.onStaffListChange}
            />
           <MultiselectPanel
             header="Profile Types"
             placeholder="Profile Types"
             value={this.props.profileTypesSelected.toArray()}
             data={this.props.profileTypes}
             textField="profileType"
             busy={this.props.profileTypes.size === 0}
             onChange={this.props.onProfileTypesChange}
             filter="contains"
           />
          </PanelGroup>
        </Col>
        <Col md={8}>
        <Panel header="Found">

        </Panel>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Panel header="Timeline">
          </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}
