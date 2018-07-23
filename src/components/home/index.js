import React from 'react';

import { Row, Col, Typography } from 'react-materialize';

import Welcome from '../welcome/Welcome';
import AppStatus from '../application_status/ApplicationStatus';
import TopMovers from '../top_movers/TopMovers';
import RecentNews from '../recent_news/RecentNews';
import Charts from '../charts_price/ChartsPrice';
import Watchlist from '../watchlist/Watchlist';

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
        <Col s={12} className="hide-on-med-and-up">
          <Watchlist />
        </Col>
      </Row>
    </div>
  );
};
