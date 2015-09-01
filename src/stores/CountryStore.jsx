/*jshint unused: false*/

import alt from '../alt';
import CountryActions from 'actions/CountryActions';

class CountryStore {

  constructor() {
    this.countries = [];
    this.bindActions(CountryActions);
  }

  onFetchCountries() {
    this.countries = [];
  }

  onUpdateCountries(countries) {
    this.countries = countries;
  }
}

module.exports = alt.createStore(CountryStore, 'CountryStore');
