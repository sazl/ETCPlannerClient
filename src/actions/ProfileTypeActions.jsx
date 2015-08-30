import alt from '../alt';
import ProfileTypeService from 'services/ProfileTypeService';

class ProfileTypeActions {

  fetchProfileTypes(data={}) {
    this.dispatch();
    ProfileTypeService.getProfileTypes(data).then((profileTypes) => {
      this.actions.updateProfileTypes(profileTypes);
    });
  }

  updateProfileTypes(profileTypes) {
    this.dispatch(profileTypes);
  }
}

module.exports = alt.createActions(ProfileTypeActions);
