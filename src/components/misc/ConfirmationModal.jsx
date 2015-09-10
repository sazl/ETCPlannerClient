import React from 'react/addons';

import {
  Modal,
  Button
} from 'react-bootstrap';

import BaseComponent from 'components/BaseComponent';


export default class ConfirmationModal extends BaseComponent {

  render() {
    return (
      <Modal
         bsSize={this.props.bsSize}
         show={this.props.show}
         onHide={this.props.onCancel}
         backdrop={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={this.props.bsStyle}>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onCancel}>No</Button>
          <Button bsStyle='danger' onClick={this.props.onAccept}>Yes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

ConfirmationModal.propTypes = {
  bsSize: React.PropTypes.string,
  bsStyle: React.PropTypes.string,
  show: React.PropTypes.bool,
  onAccept: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  title: React.PropTypes.string
};

ConfirmationModal.defaultProps = {
  bsSize: 'small',
  bsStyle: 'alert alert-danger'
};
