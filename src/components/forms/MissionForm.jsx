import React from 'react/addons';
import {
  Input,
  ButtonInput
} from 'react-bootstrap';

export default class MissionForm extends React.Component {
  render() {
    return (
      <form>
        <Input type="text" label="Mission" />
        <Input type="text" label="Mission" />
      </form>
    );
  }
}
