import React from 'react/addons';
import { Input } from 'react-bootstrap';
import { DropdownList } from 'react-widgets';

import ValidatedComponent from 'components/inputs/ValidatedComponent';

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

export default class ValidatedDropdownList extends ValidatedComponent {
  render() {
    return (
      <DropdownListInput {...this.props} />
    );
  }
}
