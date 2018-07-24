import React from 'react';

// import { Tabs, Tab, Icon } from 'react-materialize';
// import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

import ChartDetail from '../chart_detail_price/chart_detail';
import './ChartsPrice.css';
import welcome from '../../assets/images/welcome.png';
import OneSparkleChart from './OneSparkleChart';

export default class ChartsPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  getLocalSymbles = () => {
    let localSymbles = [];
    this.props.topMovers.map(mover => {
      return localSymbles.push(mover.CoinInfo.Name);
    });
    return localSymbles.slice(0, 2);
  };

  renderSymble = sym => {
    return (
      <tr key={sym}>
        <td>&nbsp;&nbsp;&nbsp;{sym}</td>
        <td style={{ width: '50%', marginRight: '2rem' }}>
          <OneSparkleChart sym={sym} />
        </td>
        <td>
          {' '}
          <a className="btn-floating btn-small waves-effect waves-light orange">
            <i className="material-icons">add</i>
          </a>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <div id="charts">
        <div className="hide-on-med-and-up">
          <span className="title">Cryptocurrencies</span>
          <a href="#!" className="secondary-content">
            <i className="material-icons">more_horiz</i>
          </a>
        </div>

        <table className="highlight z-depth-3">
          <tbody>
            {this.getLocalSymbles().map(sym => {
              return this.renderSymble(sym);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
