import React, { Component } from 'react';
import reactChartkick, { AreaChart } from 'react-chartkick';
import Chart from 'chart.js';

reactChartkick.addAdapter(Chart);
export default class RateExangeListItem extends Component {
  formatData = (rates, currencyCode) => {
    return Object.keys(rates).map(date => {
      return [date, rates[date][currencyCode]];
    });
  };

  render() {
    const { name, flag, rates, currencyCode } = this.props.rateExchange;
    return (
      <tr>
        <td>
          {name}
          <br />
          <img
            src={flag}
            alt="flag"
            style={{ width: `100px`, height: `60px` }}
          />
        </td>

        <td className="col-md-12">
          <AreaChart
            data={this.formatData(rates, currencyCode)}
            xtitle="Date"
            ytitle={currencyCode}
          />
        </td>
      </tr>
    );
  }
}
