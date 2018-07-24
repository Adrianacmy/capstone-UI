import React from 'react';
import { connect } from 'react-redux';

import { Row, Col, Typography } from 'react-materialize';

import Welcome from '../welcome/Welcome';
import AppStatus from '../application_status/ApplicationStatus';
import TopMovers from '../top_movers/TopMovers';
import RecentNews from '../recent_news/RecentNews';
import ChartsPrice from '../charts_price/ChartsPrice';
import Watchlist from '../watchlist/Watchlist';

import { fetchTopMovers } from '../../actions/index';

import './home.css';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTopMovers();
  }

  render() {
    const { topMovers } = this.props;
    // console.log(this.props.topMovers)

    return (
      <div className="container">
        <Row id="home">
          <Col s={12} m={7}>
            <Welcome />
            <AppStatus />
            <TopMovers topMovers={topMovers} />
            <RecentNews />
          </Col>

          <Col id="charts" s={12} m={4} className="offset-m1">
            <ChartsPrice topMovers={topMovers} />
          </Col>
        </Row>
        <Row>
          <Col s={12} className="hide-on-med-and-up">
            <Watchlist />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateTopProps = state => {
  // console.log(state);
  return {
    topMovers: state.topMovers
  };
};

export default connect(
  mapStateTopProps,
  { fetchTopMovers }
)(Home);
