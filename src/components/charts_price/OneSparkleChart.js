import React from 'react';
import { connect } from 'react-redux';

import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';
import { Tabs, Tab, Icon } from 'react-materialize';

import { fetchDailyPrice } from '../../actions/index';

class OneSparkleChart extends React.Component {
  componentDidMount() {
    console.log(this.props.sym);
    this.props.fetchDailyPrice(this.props.sym);
  }

  // formatData = () => {
  //   // console.log(this.props.dailyPrice)
  //   let priceArr = [];
  //   let allPrice = this.props.dailyPrice;
  //   if (allPrice[0]) {
  //     allPrice[0].forEach((val, key) => {
  //       priceArr.push(val.close);
  //     });
  //   }
  //   return priceArr;
  // }

  render() {
    // console.log(this.formatData())
    return (
      <Sparklines data={this.props.dailyPrice.sym}>
        <SparklinesLine style={{ fill: 'none' }} color="blue" />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.dailyPrice);
  return {
    dailyPrice: state.dailyPrice
  };
};

export default connect(
  mapStateToProps,
  { fetchDailyPrice }
)(OneSparkleChart);
