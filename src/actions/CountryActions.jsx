import alt from '../alt';
import CountryService from 'services/CountryService';

class CountryActions {

  fetchCountries(data={}) {
    this.dispatch();
    CountryService.getCountries(data).then((countries) => {
      this.actions.updateCountries(countries);
    });
  }

  updateCountries(countries) {
    this.dispatch(countries);
  }
}

module.exports = alt.createActions(CountryActions);
