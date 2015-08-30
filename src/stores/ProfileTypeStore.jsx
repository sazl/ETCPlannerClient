/*jshint unused: false*/

import alt from '../alt';
import ProfileTypeActions from 'actions/ProfileTypeActions';

class ProfileTypeStore {

  constructor() {
    this.profileTypes = [];
    this.bindActions(ProfileTypeActions);
  }

  onFetchProfileTypes() {
    this.profileTypes = [];
  }

  onUpdateProfileTypes(profileTypes) {
    this.profileTypes = profileTypes;
  }
}

module.exports = alt.createStore(ProfileTypeStore, 'ProfileTypeStore');
