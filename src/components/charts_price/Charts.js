import React from 'react';
import { connect } from 'react-redux';

import { Tabs, Tab, Icon } from 'react-materialize';
import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';

import { fetchDailyPrice } from '../../actions/index';

import ChartDetail from '../chart_detail_price/chart_detail';
import './ChartsPrice.css';
import welcome from '../../assets/images/welcome.png';
import Footer from 'react-materialize/lib/Footer';

class Charts2 extends React.Component {
  constructor(props) {
    super(props);
    // this.formatData = this.formatData.bind(this);
    this.makeAChart = this.makeAChart.bind(this);
  }

  // const topMovers = this.props;
  // console.log(topMovers);

  componentDidMount() {
    // this.props.fetchDailyPrice('BTC');
    // console.log(this.props);
  }

  getLocalSymbles = () => {
    let localSymbles = [];
    console.log(this.props);
    if (this.props.topMovers) {
      this.props.topMovers.map(mover => {
        return localSymbles.push(mover.CoinInfo.Name);
      });
    }
    return localSymbles.slice(0, 10);
  };

  formatData = priceData => {
    let priceArr = [];
    // let allPrice = this.props.dailyPrice;
    if (priceData[0]) {
      priceData[0].forEach((val, key) => {
        priceArr.push(val.close);
      });
    }
    return priceArr;
  };

  makeAChart(data) {
    return (
      <Sparklines data={data}>
        <SparklinesLine style={{ fill: 'none' }} color="blue" />
        <SparklinesReferenceLine type="mean" color="orange" />
      </Sparklines>
    );
  }

  renderSymble = sym => {
    const data = this.formatData(this.props.fetchDailyPrice(sym));
    return (
      <tr key={sym}>
        <td>&nbsp;&nbsp;&nbsp;&nbsp;{sym}</td>
        <td style={{ width: '50%', marginRight: '2rem' }}>
          {this.makeAChart(data)}
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
    console.log(this.getLocalSymbles());
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

const mapStateToProps = state => {
  // console.log(state);
  return {
    dailyPrice: state.dailyPrice
  };
};
export default connect(
  mapStateToProps,
  { fetchDailyPrice }
)(Charts2);
