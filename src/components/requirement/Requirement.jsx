import React from 'react/addons';

import {
  Affix,
  Input,
  Row,
  Col,
  Panel
} from 'react-bootstrap';

export default class Requirement extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={4}>
          <Affix>
          <Panel header="Requirements" collapsible defaultExpanded>
          <form>
            <Input type="text" label="Test"/>
          </form>
          </Panel>
          </Affix>
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
