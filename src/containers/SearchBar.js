import React, { Component } from 'react';
import { fetchCountries, fetchRateExange } from '../actions';
import { connect } from 'react-redux';
const lodash = require('lodash');

class SearchBar extends Component {
  componentWillMount = () => {
    this.props.fetchCountries();
  };

  renderSelectCountries = () => {
    return (
      <select
        onChange={e => this.onChangeCountry(e)}
        className="form-control search_bar">
        {this.props.countries.map(country => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    );
  };

  onChangeCountry = e => {
    const countryCode = e.target.value;
    const country = lodash.find(this.props.countries, { code: countryCode });

    this.props.fetchRateExange(country);
  };

  render() {
    return <form className="form-group">{this.renderSelectCountries()}</form>;
  }
}
const mapDispatchToPros = {
  fetchCountries,
  fetchRateExange,
};

const mapStateToProps = store => {
  return {
    countries: store.countryReducer.countries,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(SearchBar);
