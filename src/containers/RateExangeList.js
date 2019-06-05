import React, { Component } from 'react';
import { connect } from 'react-redux';
class RateExangeList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <th>Pays</th>
          <th className="col-md-6">
            Valeur de la monnaie par apport au dollar
          </th>
        </thead>
        <tbody>{this.props.rateExangeList.map()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = () => {
  return { rateExangeList: state.rateExangeReducer.rateExangeList };
};

export default connect(
  mapStateToProps,
  undefined
)(RateExangeList);
