import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import LineChart from './components/line_chart';
import ToolTip from './components/tooltip';

import { fetchDailyPrice } from './actions/index';

import { connect } from 'react-redux';

// import InfoBox from './InfoBox';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingData: true,
      hoverLoc: null,
      activePoint: null
    };
  }

  componentDidMount() {
    this.props.fetchDailyPrice();
  }

  handleChartHover(hoverLoc, activePoint) {
    this.setState({
      hoverLoc: hoverLoc,
      activePoint: activePoint
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>30 Day Bitcoin Price Chart</h1>
        </div>
        <div className="row">
          <div className="popup">
            {this.state.hoverLoc ? (
              <ToolTip
                hoverLoc={this.state.hoverLoc}
                activePoint={this.state.activePoint}
              />
            ) : null}
          </div>
        </div>
        <div className="row">
          <div className="chart">
            {this.props.data[0] ? (
              <LineChart
                data={this.props.data}
                onChartHover={(a, b) => this.handleChartHover(a, b)}
              />
            ) : null}
          </div>
        </div>

        <div className="row">
          <div id="coindesk">
            {' '}
            Powered by <a href="http://www.coindesk.com/price/">CoinDesk</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  { fetchDailyPrice }
)(App);
