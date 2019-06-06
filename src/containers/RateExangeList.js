import React, { Component } from 'react';
import { connect } from 'react-redux';
import RateExangeListItem from '../components/RateExangeListItem';
class RateExangeList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-md-6">Pays</th>
            <th>Valeur de la monnaie par apport au dollar</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rateExangeList.map((rate, index) => {
            return (
              <RateExangeListItem key={rate.code + index} rateExchange={rate} />
            );
          })}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return { rateExangeList: state.rateExangeReducer.rateExangeList };
};

export default connect(
  mapStateToProps,
  undefined
)(RateExangeList);
