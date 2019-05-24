import React, { Component } from 'react';
import { fetchCountries } from '../actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  componentWillMount = () => {
    this.props.fetchCountries();
  };

  renderSelectCountries = () => {
    return (
      <select>
        <option>test</option>
      </select>
    );
  };

  render() {
    return <form>{this.renderSelectCountries()}</form>;
  }
}
const mapDispatchToPros = {
  fetchCountries,
};

export default connect(
  undefined,
  mapDispatchToPros
)(SearchBar);
