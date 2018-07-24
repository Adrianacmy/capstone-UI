import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Sparklines,
  SparklinesLine,
  SparklinesSpots,
  SparklinesReferenceLine
} from 'react-sparklines';
import { Tabs, Tab, Icon } from 'react-materialize';

// import { fetchDailyPrice } from '../../actions/index';

export default class OneSparkleChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  // componentDidMount() {
  //   // console.log(this.props.sym);
  //   this.props.fetchDailyPrice(this.props.sym);
  //   const data = this.props.dailyPrice.sym
  //   console.log(data)
  //   this.setState({
  //     data: data.map( coinPrice => {
  //       return coinPrice[this.props.sym].close;
  //     })
  //   });
  // }

  async componentDidMount() {
    const res = await fetch(
      `https://min-api.cryptocompare.com/data/histoday?fsym=${
        this.props.sym
      }&tsym=USD&limit=365`
    );
    const data = await res.json();
    // console.log(data.Data);

    this.setState({
      // return array of ojbect
      data: data.Data.map(date => {
        return date.close;
      })
    });
  }

  render() {
    // const { sym, dailyPrice } = this.props;
    // console.log(this.props.sym)
    console.log(this.state);
    if (this.state.data) {
      return (
        <Link to={`/chart/${this.props.sym}`}>
          <Sparklines data={this.state.data}>
            <SparklinesLine style={{ fill: 'none' }} color="blue" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </Link>
      );
    } else {
      return 'loading...';
    }
  }
}

// const mapStateToProps = state => {
//   // console.log(state.dailyPrice);
//   return {
//     dailyPrice: state.dailyPrice
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchDailyPrice }
// )(OneSparkleChart);
