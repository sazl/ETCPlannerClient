import React from 'react/addons';
import connectToStores from 'alt/utils/connectToStores';
import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';
import StaffStatus from 'components/dashboard/StaffStatus';

@connectToStores
export default class StaffAvailable extends React.Component {
  static getStores() {
    return [StaffStore];
  }

  static getPropsFromStores() {
    return StaffStore.getState();
  }

  componentWillMount() {
    StaffActions.fetchAvailable();
  }

  render() {
    return (
      <StaffStatus staffList={this.props.available}
                   heading="Available"
                   bsStyle="success"/>
    );
  }
}
