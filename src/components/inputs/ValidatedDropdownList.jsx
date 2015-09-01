import React from 'react/addons';
import { Input } from 'react-bootstrap';
import { ValidatedInput } from 'react-bootstrap-validation';
import { DropdownList } from 'react-widgets';


class DropdownListInput extends React.Component {
  render() {
    const { label, help, bsStyle, ...other } = this.props;
    return (
      <Input
       label={label}
       bsStyle={bsStyle}
       help={help}
       hasFeedback>
      <DropdownList {...other}/>
      </Input>
    );
  }
}

export default class ValidatedDropdownList extends ValidatedInput {

  constructor(props) {
    super(props);
    this.getValue = this.getValue.bind(this);
  }

  getValue() {
    return this.props.value;
  }

  render() {
    return (
      <DropdownListInput {...this.props} />
    );
  }
}

ValidatedDropdownList.defaultProps = {
  validateEvent: 'onChange'
};
