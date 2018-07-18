import React, { Component } from 'react';

import { Row, Col, Typography } from 'react-materialize';

import Welcome from './welcome';
import AppStatus from './application_status';
import TopMovers from './top_movers';
import RecentNews from './recent_news';
import Charts from './charts';
import Watchlist from './watchlist';

import './home.css';

export default () => {
  return (
    <div className="container">
      <Row id="home">
        <Col s={12} m={7}>
          <Welcome />
          <AppStatus />
          <TopMovers />
          <RecentNews />
        </Col>
        <Col id="charts" s={12} m={4} className="offset-m1">
          <Charts />
        </Col>
      </Row>
      <Row>
        <Col s={12}>
          <Watchlist />
        </Col>
      </Row>
    </div>
  );
};
