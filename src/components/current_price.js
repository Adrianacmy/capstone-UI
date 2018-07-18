import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentPrice } from '../actions';
import _ from 'lodash';

class CurrentPrice extends Component {
  componentDidMount() {
    this.props.fetchCurrentPrice();
  }

  render() {
    let info = '';
    const currentInfo = this.props.currentPrice['0'];
    if (currentInfo) {
      const {
        name,
        symble,
        price_usd,
        percent_change_1h
      } = this.props.currentPrice['0'];
      info = (
        <div>
          name: {name} <br /> price: $ {price_usd} <br /> percentage change:{' '}
          {percent_change_1h}
        </div>
      );
    } else {
      info = 'loading...';
    }
    return info;
  }
}

const mapStateToProps = state => {
  return {
    currentPrice: state.currentPrice
  };
};

export default connect(
  mapStateToProps,
  { fetchCurrentPrice }
)(CurrentPrice);
