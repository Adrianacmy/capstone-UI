import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrentPrice } from '../../actions';
import './chart.css';

class ChartTitle extends Component {
  async componentDidMount() {
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
        <div className="container" id="cartTitle">
          <div className="row">
            <h4>{name.toUpperCase()}</h4> <h5>$ {price_usd} </h5>{' '}
            {percent_change_1h}
          </div>
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
)(ChartTitle);
