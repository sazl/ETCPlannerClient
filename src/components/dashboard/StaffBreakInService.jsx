import React from 'react/addons';
import connectToStores from 'alt/utils/connectToStores';
import StaffActions from 'actions/StaffActions';
import StaffStore from 'stores/StaffStore';
import StaffStatus from 'components/dashboard/StaffStatus';

@connectToStores
export default class StaffBreakInService extends React.Component {
  static getStores() {
    return [StaffStore];
  }

  static getPropsFromStores() {
    return StaffStore.getState();
  }

  componentWillMount() {
    StaffActions.fetchBreakInService();
  }

  render() {
    return (
      <StaffStatus staffList={this.props.breakInService}
                   heading="Break In Service"
                   bsStyle="info"/>
    );
  }
}
