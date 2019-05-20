import React, { Component } from 'react';

export default class SearchBar extends Component {
  componentWillMount = () => {};

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
