import React from 'react/addons';
import { Input } from 'react-bootstrap';
import { ValidatedInput } from 'react-bootstrap-validation';

export default class ValidatedComponent extends ValidatedInput {

  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.props.value;
  }
}

ValidatedComponent.defaultProps = {
  validateEvent: 'onChange'
};
