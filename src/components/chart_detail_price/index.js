import React, { Component } from 'react';

import { Tabs, Tab } from 'react-materialize';

import ChartTitle from './chart_title';
import ChartDetail from './chart_detail';
import TiemPeriod from './time_period';

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timePeriod: 'histominute',
      symbl: 'Bitcoin'
    };
  }

  handleTabClick = e => {
    if (e === 40) {
      this.setState({ timePeriod: 'histominute' });
    } else if (e === 41) {
      this.setState({ TiemPeriod: 'histohour' });
    } else if (e === 42) {
      this.setState({ timePeriod: 'histoday' });
    }
  };

  render() {
    return (
      <div className="indigo darken-4">
        <ChartTitle />
        <ChartDetail />

        <TiemPeriod onHandleTabClick={this.handleTabClick} />
      </div>
    );
  }
}
