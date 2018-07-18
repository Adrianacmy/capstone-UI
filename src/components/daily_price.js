import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDailyPrice } from '../actions';
import _ from 'lodash';

class DailyPrice extends Component {
  componentDidMount() {
    this.props.fetchDailyPrice();
  }

  render() {
    const priceArray = this.props.dailyPrice.Data;

    for (let i in priceArray) {
      console.log(i, priceArray[i].close);
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    dailyPrice: state.dailyPrice
  };
};

export default connect(
  mapStateToProps,
  { fetchDailyPrice }
)(DailyPrice);
