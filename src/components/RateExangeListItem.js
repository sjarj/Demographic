import React, { Component } from 'react';

export default class RateExangeListItem extends Component {
  render() {
    const { name, flag, rates } = this.props.rateExchange;
    return (
      <tr>
        <td>
          {name}
          <br />
          <img
            src={flag}
            alt="flag"
            style={{ width: `16rem`, height: `16rem` }}
          />
        </td>

        <td>Graphique</td>
      </tr>
    );
  }
}
