import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { fetchCurrentPrice } from '../../actions';
import './chart.css';

export default class ChartTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  getFullName = shortname => {
    switch (shortname) {
      case 'BTC':
        return 'bitcoin';
      case 'ETH':
        return 'Ethereum';
      case 'EOS':
        return 'eos';
      case 'BCH':
        return 'bitcoin-cash';
      case 'LTC':
        return 'Litecoin';
      case 'ETC':
        return 'Ethereum-Classic';
      case 'XRP':
        return 'ripple';
      case 'TRX':
        return 'Tronix';
      case 'CET':
        return 'CoinEx-token';
      case 'MITH':
        return 'Mithril';
      default:
        return 'bitcoin';
    }
  };

  async componentDidMount() {
    const sym = this.getFullName(this.props.sym);
    const url = `https://api.coinmarketcap.com/v1/ticker/${sym}/`;

    const res = await fetch(url);
    const data = await res.json();
    this.setState({
      data: data
    });

    // this.props.fetchCurrentPrice(sym);
    // if(this.props.currentPrice['0']){
    //   this.setState({
    //     name: this.props.currentPrice['0'].name,
    //     symble: this.props.currentPrice['0'].symble,
    //     price_usd: this.props.currentPrice['0'].price_usd,
    //     percent_change_1h: this.props.currentPrice['0'].percent_change_1h
    //   });
    // }
  }

  render() {
    try {
      const d = this.state.data[0];
      return (
        <div className="container" id="cartTitle">
          <div className="row">
            <h4>{d.name.toUpperCase()}</h4> <h5>$ {d.price_usd} </h5>{' '}
            {d.percent_change_1h} %
          </div>
        </div>
      );
    } catch (e) {
      return 'loading';
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     currentPrice: state.currentPrice
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchCurrentPrice }
// )(ChartTitle);
