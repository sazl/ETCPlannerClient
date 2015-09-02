import React from 'react/addons';
import { Form, ValidatedInput } from 'react-bootstrap-validation';

export default class ValidatedForm extends Form {

  _renderChildren(children) {
    if (typeof children !== 'object' || children === null) {
      return children;
    }

    return React.Children.map(children, child => {
      if (typeof child !== 'object' || child === null) {
        return child;
      }
      if (child.type === ValidatedInput || child.type.prototype instanceof ValidatedInput) {
        let name = child.props && child.props.name;

        if (!name) {
          throw new Error('Can not add input without "name" attribute');
        }

        let newProps = {
          _registerInput: this.registerInput.bind(this),
          _unregisterInput: this.unregisterInput.bind(this)
        };

        let evtName = child.props.validationEvent ?
                      child.props.validationEvent : this.props.validationEvent;

        let origCallback = child.props[evtName];
        newProps[evtName] = e => {
          this._validateInput(name);
          return origCallback && origCallback(e);
        };

        let defaultValue = this.props.model && this.props.model[name];

        if (child.props.type === 'checkbox') {
          newProps.defaultChecked = defaultValue;
        } else {
          newProps.defaultValue = defaultValue;
        }

        let error = this._hasError(name);

        if (error) {
          newProps.bsStyle = 'error';

          if (typeof error === 'string') {
            newProps.help = error;
          } else if (child.props.errorHelp) {
            newProps.help = child.props.errorHelp;
          }
        }

        return React.cloneElement(child, newProps);
      } else {
        return React.cloneElement(child, {}, this._renderChildren(child.props && child.props.children));
      }
    });
  }
}
