import React from 'react/addons';

import Immutable from 'immutable';

import BaseComponent from 'components/BaseComponent';

import { Label } from 'react-bootstrap';

export default class ColorLabel extends BaseComponent {
  render() {
    return (
      <Label style={{backgroundColor: '#' + this.props.color}}>
        {this.props.text}
      </Label>
    );
  }
}

ColorLabel.propTypes = {
  text: React.PropTypes.string,
  color: React.PropTypes.string
};
