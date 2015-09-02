import React from 'react/addons';
import { Input } from 'react-bootstrap';
import { ValidatedInput } from 'react-bootstrap-validation';
import { Multiselect } from 'react-widgets';


class MultiselectInput extends React.Component {
  render() {
    const { label, help, bsStyle, ...other } = this.props;
    return (
      <Input
       label={label}
       bsStyle={bsStyle}
       help={help}
       hasFeedback>
      <Multiselect {...other}/>
      </Input>
    );
  }
}

export default class ValidatedMultiselect extends ValidatedInput {

  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.props.value;
  }

  render() {
    return (
      <MultiselectInput {...this.props} />
    );
  }
}

ValidatedMultiselect.defaultProps = {
  validateEvent: 'onChange'
};
