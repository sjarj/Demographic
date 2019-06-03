import React, { Component } from 'react';
import { fetchCountries } from '../actions';
import { connect } from 'react-redux';

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
    console.log(e.target.value);
  };

  render() {
    return <form className="form-group">{this.renderSelectCountries()}</form>;
  }
}
const mapDispatchToPros = {
  fetchCountries,
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
