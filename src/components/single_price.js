import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSiglePrice } from '../actions';
import _ from 'lodash';

class SinglePrice extends Component {
  componentDidMount() {
    this.props.fetchSiglePrice();
  }

  render() {
    let price = this.props.singlePrice.JPY;
    return <div>{price}</div>;
  }
}

const mapStateToProps = state => {
  return {
    singlePrice: state.singlePrice
  };
};

export default connect(
  mapStateToProps,
  { fetchSiglePrice }
)(SinglePrice);
