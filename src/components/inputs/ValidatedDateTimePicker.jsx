import React from 'react/addons';
import { Input } from 'react-bootstrap';
import { DateTimePicker } from 'react-widgets';

import ValidatedComponent from 'components/inputs/ValidatedComponent';


class DateTimePickerInput extends React.Component {
  render() {
    const { label, help, bsStyle, ...other } = this.props;
    return (
      <Input
       label={label}
       bsStyle={bsStyle}
       help={help}
       hasFeedback>
      <DateTimePicker {...other}/>
      </Input>
    );
  }
}

export default class ValidatedDateTimePicker extends ValidatedComponent {
  render() {
    return (
      <DateTimePickerInput {...this.props} />
    );
  }
}
