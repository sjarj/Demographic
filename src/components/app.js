import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import RateExangeList from '../containers/RateExangeList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RateExangeList />
      </div>
    );
  }
}
